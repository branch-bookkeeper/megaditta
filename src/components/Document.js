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

            <meta name="theme-color" content="#f96232" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

            <link rel="manifest" href="manifest.json" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="favicon-512x512.png" />
            <link rel="stylesheet" href="css/default.css" />
            <link rel="stylesheet" href="css/layout.css" />
            <link rel="stylesheet" href="css/media-queries.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/lightbox-fixes.css" />
            <link rel="stylesheet" href="css/cookiebar-fixes.css" />

            <script src="js/modernizr.js" />
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

            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&tracking=1&always=1&hideDetailsBtn=1" />
        </Body>
    </Html>
);

Document.propTypes = propTypes;

export default Document;
