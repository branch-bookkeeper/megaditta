import React from 'react';
import { withSiteData } from 'react-static';

import Hero from '../components/sections/Hero';
import Pricing from '../components/sections/Pricing';
import Features from '../components/sections/Features';
import Subscribe from '../components/sections/Subscribe';

export default withSiteData(() => (
    <div>
        <Hero />
        <Features />
        <Pricing />
        <Subscribe />
    </div>
));
