import Mailchimp from 'mailchimp-api-v3';
import qs from 'qs';
import md5 from 'md5';
import isEmail from 'validator/lib/isEmail';
import when from 'ramda/src/when';
import equals from 'ramda/src/equals';
import trim from 'ramda/src/trim';
import isNil from 'ramda/src/isNil';
import toLower from 'ramda/src/toLower';

const {
    MAILCHIMP_API_KEY,
    MAILCHIMP_LIST_ID = '9d02ba32e8',
} = process.env;

function MethodNotAllowedError() {
    this.response = {
        statusCode: 405,
        body: 'Method not allowed',
    };
}

function BadRequestError(message) {
    this.response = {
        statusCode: 400,
        body: message,
    };
}

const isEmailInList = (mailchimp, email) => new Promise((resolve) => {
    const emailId = md5(toLower(trim(email)));

    mailchimp.get(
        `/lists/${MAILCHIMP_LIST_ID}/members/${emailId}`,
        err => resolve(isNil(err)),
    );
});

const addEmailToList = (mailchimp, email) => new Promise((resolve, reject) => {
    mailchimp.post(`/lists/${MAILCHIMP_LIST_ID}/members/`, {
        email_address: email,
        status: 'pending',
    }, (err, result) => (err ? reject(err) : resolve(result)));
});

const subscribeHandler = ({
    httpMethod,
    body,
}) => {
    if (httpMethod !== 'POST') {
        throw new MethodNotAllowedError();
    }

    const bodyDecoded = qs.parse(body);
    if (!bodyDecoded || !bodyDecoded.EMAIL) {
        throw new BadRequestError('Please provide an email address');
    }

    const { EMAIL: email } = bodyDecoded;
    if (!isEmail(email)) {
        throw new BadRequestError('Please provide a valid email address');
    }

    const mailchimp = new Mailchimp(MAILCHIMP_API_KEY);

    return isEmailInList(mailchimp, email)
        .then(when(equals(false), () => addEmailToList(mailchimp, email)))
        .then(() => 'OK');
};

export const handler = (event, context, callback) => {
    Promise.resolve(event)
        .then(subscribeHandler)
        .then(result => callback(null, { statusCode: 200, body: result }))
        .catch(e => (e.response ? callback(null, e.response) : callback(e)));
};
