import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
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
                <HowItWorks />
                <Features />
                <Pricing />
                <Subscribe />
            </div>
        );
    }
}

export default withSiteData(Home);
