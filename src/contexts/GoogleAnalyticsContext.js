import React, { Component, createContext } from 'react';
import ReactGA from 'react-ga';

import { GOOGLE_ANALYTICS_ID } from 'config';

const DummyReactGA = {
    initialize: () => {},
    pageview: () => {},
    event: () => {},
};

const Context = createContext(DummyReactGA);
const { Provider, Consumer } = Context;

class GoogleAnalyticsProvider extends Component {
    constructor(props) {
        super(props);

        this.ga = process.env.NODE_ENV === 'production' ? ReactGA : DummyReactGA;
        this.ga.initialize(GOOGLE_ANALYTICS_ID);
    }

    render() {
        return (<Provider value={this.ga} {...this.props} />);
    }
}

export {
    GoogleAnalyticsProvider as Provider,
    Consumer,
};
export default Context;
