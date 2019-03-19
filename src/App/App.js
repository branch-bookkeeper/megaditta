import 'css/fonts.css';
import 'css/font-awesome/css/font-awesome.css';
import 'css/default.css';
import 'css/layout.css';
import 'css/media-queries.css';
import 'css/animate.css';
import 'css/lightbox-fixes.css';
import 'css/cookiebar-fixes.css';

import 'script-loader!js/jquery-1.10.2.min.js';
import 'script-loader!js/jquery-migrate-1.2.1.min.js';

import 'script-loader!js/jquery.waypoints.min.js';
import 'script-loader!js/jquery.fittext.js';
import 'script-loader!js/main.js';


import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import { OutboundLink } from 'react-ga';

import Routes from 'react-static-routes'; // eslint-disable-line import/no-unresolved,import/extensions

import {
    Provider as GoogleAnalyticsProvider,
    Consumer as GoogleAnalyticsConsumer,
} from 'contexts/GoogleAnalyticsContext';

import {
    Header,
    LogoWrapper,
    HeaderLogo,
    Footer,
    FooterLogo,
    FooterTextLogo,
} from './App.style';

const toggleMenu = (ev) => {
    const { jQuery: $ } = window;

    ev.preventDefault();
    $('ul#nav').slideToggle('fast');
};

const hideNav = () => {
    const { jQuery: $ } = window;

    if ($('#toggle-btn').is(':visible')) {
        $('ul#nav').fadeOut('fast');
    }
};

const NavLink = ({
    className,
    href,
    eventLabel,
    children,
}) => (
    <GoogleAnalyticsConsumer>
        {({ event }) => (
            <a
                className={className}
                href={href}
                onClick={() => {
                    hideNav();
                    event({
                        category: 'Navigation',
                        action: 'Click',
                        label: eventLabel,
                    });
                }}
            >
                {children}
            </a>
        )}
    </GoogleAnalyticsConsumer>
);
NavLink.propTypes = {
    className: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    eventLabel: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const App = () => (
    <GoogleAnalyticsProvider>
        <Router>
            <div>
                <Header>
                    <LogoWrapper className="logo">
                        <a className="smoothscroll" href="#hero">
                            <HeaderLogo />
                        </a>
                    </LogoWrapper>

                    <nav id="nav-wrap">
                        <a
                            id="toggle-btn"
                            title="Menu"
                            href="#"
                            onClick={toggleMenu}
                        >
                            Menu
                        </a>

                        <ul id="nav" className="nav">
                            <li>
                                <NavLink
                                    className="smoothscroll"
                                    href="#how-it-works"
                                    eventLabel="How It Works"
                                >
                                    How it works
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="smoothscroll"
                                    href="#features"
                                    eventLabel="Extra Features"
                                >
                                    Extra Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="smoothscroll"
                                    href="#pricing"
                                    eventLabel="Pricing"
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="smoothscroll"
                                    href="#subscribe"
                                    eventLabel="Subscribe"
                                >
                                    Subscribe
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <ul className="header-social">
                        <li>
                            <OutboundLink
                                eventLabel="Facebook"
                                to="https://www.facebook.com/bbkeepr/"
                            >
                                <i className="fa fa-facebook" />
                            </OutboundLink>
                        </li>
                        <li>
                            <OutboundLink
                                eventLabel="Twitter"
                                to="https://twitter.com/bbkeepr"
                            >
                                <i className="fa fa-twitter" />
                            </OutboundLink>
                        </li>
                    </ul>
                </Header>
                <div className="content">
                    <Routes />
                </div>

                <Footer>
                    <div className="Footer-logo">
                        <a className="smoothscroll" title="Back to Top" href="#hero">
                            <FooterLogo />
                            <FooterTextLogo />
                        </a>
                    </div>

                    <p className="copyright">
                        <span>&copy; {(new Date()).getFullYear()}</span>
                        <a
                            href="https://www.iubenda.com/privacy-policy/84405826"
                            className="iubenda-black iubenda-embed"
                            title="Privacy Policy"
                        >
                            Privacy Policy
                        </a>
                        <OutboundLink
                            eventLabel="Status"
                            to="https://status.branch-bookkeeper.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Status
                        </OutboundLink>
                        <OutboundLink
                            eventLabel="Contact Us"
                            to="mailto:info@branch-bookkeeper.com"
                        >
                            Contact us
                        </OutboundLink>
                    </p>
                </Footer>
            </div>
        </Router>
    </GoogleAnalyticsProvider>
);

export default hot(module)(App);
