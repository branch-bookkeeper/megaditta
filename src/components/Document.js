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

            <footer>
                <div className="row">
                    <div className="six columns info">
                        <div className="footer-logo">
                            <a href="#">
                                <img src="images/footer-logo.png" alt="" />
                            </a>
                        </div>

                        <p>
                            This is Photoshop&apos;s version  of Lorem Ipsum.
                            Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        </p>
                    </div>

                    <div className="six columns right-cols">
                        <div className="row">
                            <div className="columns">
                                <h3 className="address">Come Visit</h3>
                                <p>
                                    1600 Amphitheatre Parkway<br />
                                    Mountain View, CA<br />
                                    94043 US
                                </p>
                            </div>

                            <div className="columns">
                                <h3 className="social">socialize</h3>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">GooglePlus</a></li>
                                </ul>
                            </div>

                            <div className="columns last">
                                <h3 className="contact">Contact Us</h3>
                                <ul>
                                    <li><a href="tel:6473438234">647.343.8234</a></li>
                                    <li><a href="tel:1234567890">123.456.7890</a></li>
                                    <li><a href="mailto:someone@woo.com">someone@woosite.com</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <p className="copyright">
                        &copy; 2014 Woo | Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a>
                    </p>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#hero"><i className="icon-up-open" /></a>
                    </div>

                </div>

            </footer>


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
