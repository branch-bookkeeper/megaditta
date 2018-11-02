import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    Html: PropTypes.func.isRequired,
    Head: PropTypes.func.isRequired,
    Body: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

const Document = ({
    Html,
    Head,
    Body,
    children,
}) => (
    <Html className="no-js" lang="en">
        <Head>
            <meta charSet="utf-8" />
            <title>Branch Bookkeeper</title>
            <meta name="description" content="" />
            <meta name="author" content="" />

            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

            <link rel="stylesheet" href="css/default.css" />
            <link rel="stylesheet" href="css/layout.css" />
            <link rel="stylesheet" href="css/media-queries.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/lightbox-fixes.css" />

            <script src="js/modernizr.js" />

            <link rel="shortcut icon" href="favicon.png" />
        </Head>
        <Body>
            <div id="preloader">
                <div id="status">
                    <img src="images/preloader.gif" height="64" width="64" alt="" />
                </div>
            </div>

            {children}

            <script src="js/jquery-1.10.2.min.js" />
            <script src="js/jquery-migrate-1.2.1.min.js" />

            <script src="js/jquery.waypoints.min.js" />
            <script src="js/jquery.fittext.js" />
            <script src="js/main.js" />
        </Body>
    </Html>
);

Document.propTypes = propTypes;

export default Document;
