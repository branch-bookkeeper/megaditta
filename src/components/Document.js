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
            <meta name="description" content="Never lose the merge race again!" />
            <meta property="og:image" content="https://branch-bookkeeper.com/og-image.jpg" />
            <meta property="og:image:height" content="411" />
            <meta property="og:image:width" content="785" />
            <meta property="og:description" content="Never lose the merge race again!" />
            <meta property="og:title" content="Branch Bookkeeper" />
            <meta property="og:url" content="https://branch-bookkeeper.com" />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="1473105886116042" />

            <link rel="manifest" href="manifest.json" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="favicon-512x512.png" />
            <script src="js/modernizr.js" />
        </Head>
        <Body>
            <div
                id="preloader"
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'fixed',
                }}
            >
                <div
                    id="status"
                    style={{
                        height: 64,
                        width: 64,
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        margin: '-32px 0 0 -32px',
                    }}
                >
                    <img src="images/preloader.gif" height="64" width="64" alt="" />
                </div>
            </div>

            {children}

            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&tracking=1&always=1&hideDetailsBtn=1" />
        </Body>
    </Html>
);

Document.propTypes = propTypes;

export default Document;
