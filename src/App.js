import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes'; // eslint-disable-line import/no-unresolved,import/extensions

const App = () => (
    <Router>
        <div>
            <header>
                <div className="logo">
                    <a className="smoothscroll" href="#hero"><img alt="" src="images/logo.png" /></a>
                </div>

                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Menu</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide Menu</a>

                    <ul id="nav" className="nav">
                        <li><a className="smoothscroll" href="#features">Features</a></li>
                        <li><a className="smoothscroll" href="#pricing">Pricing</a></li>
                        <li><a className="smoothscroll" href="#screenshots">Screenshots</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#subscribe">Subscribe</a></li>
                    </ul>
                </nav>

                <ul className="header-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                </ul>
            </header>
            <div className="content">
                <Routes />
            </div>
        </div>
    </Router>
);

export default hot(module)(App);
