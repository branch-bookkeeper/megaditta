import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes'; // eslint-disable-line import/no-unresolved,import/extensions

import './app.css';

const App = () => (
    <Router>
        <div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div className="content">
                <Routes />
            </div>
        </div>
    </Router>
);

export default hot(module)(App);
