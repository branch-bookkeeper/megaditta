import React from 'react';
import { withSiteData } from 'react-static';

import Hero from '../components/sections/Hero';
import Subscribe from '../components/sections/Subscribe';
import Testimonials from '../components/sections/Testimonials';
import Screenshots from '../components/sections/Screenshots';
import Pricing from '../components/sections/Pricing';
import Features from '../components/sections/Features';

export default withSiteData(() => (
    <div>
        <Hero />
        <Features />
        <Pricing />
        <Screenshots />
        <Testimonials />
        <Subscribe />
    </div>
));
