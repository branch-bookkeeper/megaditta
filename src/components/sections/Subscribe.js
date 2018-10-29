import React, { Component } from 'react';
import styled from 'styled-components';
import isEmail from 'validator/lib/isEmail';

import { breakpointMD } from 'style/mediaQuery';
import { gutterBase, gutterLarge } from 'style/gutter';
import { bbOrange, white, text } from 'style/colors';

const SUBSCRIBE_STATES = {
    notSubscribed: 'not-subscribed',
    subscribing: 'subscribing',
    subscribed: 'subscribed',
    subscribeError: 'subscribeError',
};

const Root = styled.section`
    &#subscribe {
        a {
            &:hover,
            &:active {
                color: ${bbOrange[500]};
            }
        }

        p.error, p.success {
            margin-top: -${gutterBase};

            span {
                color: ${white};
                display: inline-block;
                padding: 4px 16px;
                border-radius: 8px;
            }
        }

        p.error span {
            background-color: #c62700;
        }

        p.success span {
            background-color: #6eb700;
        }

        iframe {
            vertical-align: middle;
        }

        #mc_embed_signup {
            margin: 0 auto;
        }

        #mc_embed_signup form {
            input, button {
                opacity: 1;
                width: 100%;
                margin-bottom: 0;
            }

            input:disabled, button:disabled {
                opacity: 0.5;
                cursor: default;
            }

            input {
                margin-bottom: ${gutterLarge};
                &:focus {
                    background-color: ${white};
                    color: ${text};
                }
            }

            button {
                background-color: ${bbOrange[500]};
                &:hover {
                    background-color: ${bbOrange[800]};
                }
                &:disabled:hover {
                    background-color: ${bbOrange[500]};
                }
            }

            @media only screen and (min-width: ${breakpointMD}) {
                display: flex;

                input, button {
                    width: auto;
                }

                input {
                    flex: 1;
                    margin-bottom: 0;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }

                button {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
    }
`;

class Subscribe extends Component {
    state = {
        EMAIL: '',
        subscribeError: null,
        subscribeState: SUBSCRIBE_STATES.notSubscribed,
    };

    handleSubmit = (ev) => {
        const { jQuery } = window;
        const { EMAIL: email } = this.state;

        ev.preventDefault();

        if (!email || !isEmail(email)) {
            this.setState({
                subscribeState: SUBSCRIBE_STATES.subscribeError,
                subscribeError: 'Please provide a valid email address',
            });
        } else {
            this.setState({
                subscribeState: SUBSCRIBE_STATES.subscribing,
            });

            const request = new Promise((resolve, reject) => jQuery.ajax({
                type: 'POST',
                url: '/.netlify/functions/subscribeToNewsletter',
                data: jQuery(ev.target).serialize(),
                success: resolve,
                error: reject,
            }));

            request
                .then(() => this.setState({
                    subscribeState: SUBSCRIBE_STATES.subscribed,
                    EMAIL: '',
                }))
                .catch(() => this.setState({
                    subscribeState: SUBSCRIBE_STATES.subscribeError,
                    subscribeError: 'Something went wrong, please try again.',
                }));
        }
    }

    handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleEmailFocus = () => this.setState({ subscribeState: SUBSCRIBE_STATES.notSubscribed });

    render() {
        const {
            EMAIL: email,
            subscribeState,
            subscribeError,
        } = this.state;

        return (
            <Root id="subscribe">
                <div className="row section-head">
                    <div className="twelve columns">
                        <h1>Subscribe</h1>
                        <p>
                            Subscribe now to receive product updates
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="twelve columns">
                        <div id="mc_embed_signup">
                            <form
                                method="post"
                                target="_blank"
                                onSubmit={this.handleSubmit}
                                noValidate
                            >
                                <input
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Your email address"
                                    value={email}
                                    onFocus={this.handleEmailFocus}
                                    onChange={this.handleInputChange}
                                    required
                                    disabled={subscribeState === SUBSCRIBE_STATES.subscribing}
                                />
                                <button
                                    type="submit"
                                    name="subscribe"
                                    className="button"
                                    disabled={subscribeState === SUBSCRIBE_STATES.subscribing}
                                >
                                    {subscribeState === SUBSCRIBE_STATES.subscribing ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                        </div>
                        {subscribeState === SUBSCRIBE_STATES.subscribeError && (
                            <p className="error">
                                <span>{subscribeError}</span>
                            </p>
                        )}
                        {subscribeState === SUBSCRIBE_STATES.subscribed && (
                            <p className="success">
                                <span>Thanks for subscribing! Check your inbox to confirm your email address.</span>
                            </p>
                        )}

                        <p>
                            <small>
                                Your email address will be handled in accordance to our
                                {' '}
                                <a
                                    href="https://www.iubenda.com/privacy-policy/84405826"
                                    className="iubenda-black iubenda-embed"
                                    title="Privacy Policy"
                                >
                                    Privacy Policy
                                </a>
                            </small>
                        </p>
                    </div>
                </div>
            </Root>
        );
    }
}

export default Subscribe;
