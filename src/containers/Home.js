import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import Hero from '../components/sections/Hero';
import Pricing from '../components/sections/Pricing';
import Features from '../components/sections/Features';
import Subscribe from '../components/sections/Subscribe';

import loadIubenda from '../lib/loadIubenda';

class Home extends Component {
    componentDidMount() {
        loadIubenda();
    }

    render() {
        return (
            <div>
                <Hero />
                <Features />
                <Pricing />
                <Subscribe />
            </div>
        );
    }
}

export default withSiteData(Home);
