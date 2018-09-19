import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes'; // eslint-disable-line import/no-unresolved,import/extensions

import { Header, LogoWrapper, HeaderLogo } from './App.style';

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

const App = () => (
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
                            <a className="smoothscroll" href="#how-it-works" onClick={hideNav}>How it works</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#features" onClick={hideNav}>Extra Features</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#pricing" onClick={hideNav}>Pricing</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#subscribe" onClick={hideNav}>Subscribe</a>
                        </li>
                    </ul>
                </nav>

                <ul className="header-social">
                    <li><a href="https://www.facebook.com/bbkeepr/"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://twitter.com/bbkeepr"><i className="fa fa-twitter" /></a></li>
                </ul>
            </Header>
            <div className="content">
                <Routes />
            </div>
        </div>
    </Router>
);

export default hot(module)(App);
