import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Pricing from '../components/sections/Pricing';
import Features from '../components/sections/Features';
import Subscribe from '../components/sections/Subscribe';

import GoogleAnalyticsContext from '../contexts/GoogleAnalyticsContext';
import loadIubenda from '../lib/loadIubenda';

class Home extends Component {
    static contextType = GoogleAnalyticsContext;

    componentDidMount() {
        const { pageview } = this.context;

        loadIubenda();
        pageview('/');
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

Home.contextType = GoogleAnalyticsContext;

export default withSiteData(Home);
