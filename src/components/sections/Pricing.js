import React from 'react';
import { OutboundLink } from 'react-ga';
import styled from 'styled-components';

import { bbOrange, text } from 'style/colors';

const Root = styled.section`
    &#pricing {
        h1 {
            margin-bottom: 54px;
        }

        p {
            color: ${text};
            margin-bottom: 0;
        }

        .button {
            background-color: ${bbOrange[500]};
            &:hover {
                background-color: ${bbOrange[800]};
            }
        }

        .pricing-tables {
            /* Fix layout gimmick */
            @media only screen and (max-width: 900px) {
                width: auto;
            }
        }

        .plan-price.crossed {
            span.price {
                font-family: inherit;
                font-size: inherit;
                color: rgba(51, 51, 51, 0.6);
                display: inline-block;
                position: relative;

                span.month {
                    display: inline;
                }

                &::before, &::after {
                    content: ' ';
                    display: block;
                    height: 6px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 50%;
                    margin-top: -3px;
                    background: #d11d1d;
                    border-radius: 3px;
                }

                &::before {
                    transform: scale(1.2) rotate(15deg);
                }

                &::after {
                    transform: scale(1.2) rotate(-15deg);
                }
            }

            span.more-info {
                color: inherit;
            }
        }

        .row.open-source {
            color: ${text};
            a {
                transition: none;
                color: ${text};
                text-decoration: underline;
                text-decoration-style: dotted;
                text-decoration-color: #bbb;
                text-underline-position: under;
                &:hover,
                &:active {
                    text-decoration-style: solid;
                    text-decoration-color: ${bbOrange[500]};
                    color: ${bbOrange[500]};
                }
            }
        }
    }
`;

const renderPlans = () => (
    <div className="row">
        <div className="pricing-tables bgrid-thirds">
            <div className="column">
                <div className="price-block">
                    <h3 className="plan-title">Startup</h3>
                    <p className="plan-price crossed">
                        <span className="price">$9.99 <span className="month">/mo</span></span>
                        <span className="more-info">FREE while in beta</span>
                    </p>

                    <ul className="features">
                        <li>3 private repos</li>
                        <li>3 users</li>
                        <li>Max 3 PRs per queue</li>
                        <li>Queue only in main branch</li>
                    </ul>

                    <footer className="plan-sign-up">
                        <a className="button" href="https://get.branch-bookkeeper.com">Install Now</a>
                    </footer>
                </div>
            </div>

            <div className="column">
                <div className="price-block">
                    <h3 className="plan-title">Premium</h3>
                    <p className="plan-price crossed">
                        <span className="price">$19.99 <span className="month">/mo</span></span>
                        <span className="more-info">FREE while in beta</span>
                    </p>

                    <ul className="features">
                        <li>10 private repos</li>
                        <li>10 users</li>
                        <li>Ulimited queue length</li>
                        <li>Queue in any branch</li>
                    </ul>

                    <footer className="plan-sign-up">
                        <a className="button" href="https://get.branch-bookkeeper.com">Install Now</a>
                    </footer>
                </div>

            </div>

            <div className="column">
                <div className="price-block">
                    <h3 className="plan-title">Ultimate</h3>
                    <p className="plan-price crossed">
                        <span className="price">$29.99 <span className="month">/mo</span></span>
                        <span className="more-info">FREE while in beta</span>
                    </p>

                    <ul className="features">
                        <li>Unlimited private repos</li>
                        <li>50 users</li>
                        <li>Ulimited queue length</li>
                        <li>Queue in any branch</li>
                    </ul>

                    <footer className="plan-sign-up">
                        <a className="button" href="https://get.branch-bookkeeper.com">Install Now</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
);

export default () => (
    <Root id="pricing">
        <div className="row section-head">
            <h1>Pricing</h1>
        </div>

        <div className="row">
            <div className="twelve columns">
                <p>
                    Branch Bookkeper is <strong>totally free for everyone</strong> while in beta.
                </p>
                <div className="plan-sign-up">
                    <OutboundLink
                        className="button"
                        eventLabel="Pricing Install Now"
                        to="https://get.branch-bookkeeper.com"
                    >
                        Install Now
                    </OutboundLink>
                </div>
            </div>
        </div>
    </Root>
);
