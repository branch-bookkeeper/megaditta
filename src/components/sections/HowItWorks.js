import React, { Component } from 'react';
import styled from 'styled-components';
import __ from 'ramda/src/__';
import add from 'ramda/src/add';
import always from 'ramda/src/always';
import compose from 'ramda/src/compose';
import evolve from 'ramda/src/evolve';
import max from 'ramda/src/max';
import min from 'ramda/src/min';
import partial from 'ramda/src/partial';
import subtract from 'ramda/src/subtract';
import Lightbox from 'react-image-lightbox';

import { gutterBase, gutterXLarge } from 'style/gutter';
import { text } from 'style/colors';
import { breakpointMD } from '../../style/mediaQuery';

const IMAGES = [
    {
        url: 'images/walkthrough/github-red.png',
        caption: 'Click on \'Details\' in your PR to see the queue.',
    },
    {
        url: 'images/walkthrough/bb-add-to-queue.png',
        caption: 'Click on \'Add to queue\' to enqueue your PR.',
    },
    {
        url: 'images/walkthrough/bb-in-queue.png',
        caption: 'Now your PR is in queue to be merged, you can safely close the window and forget about it.',
    },
    {
        url: 'images/walkthrough/notification.png',
        caption: 'When it\'s your turn, you\'ll receive a desktop notification. Click on it to go straight to your PR.',
    },
    {
        url: 'images/walkthrough/github-green.png',
        caption: 'Once your PR is first in queue nobody else can merge, you can take your time in rebasing and refining your work.',
    },
];

const Root = styled.section`
    &#how-it-works {
        border-top: solid 1px #eee;
        background-color: #f7f7f7;
        padding-top: 96px;
        padding-bottom: 78px;

        p {
            color: ${text};
            margin: ${gutterXLarge} 0;
            text-align: left;
        }

        .row.screenshot .columns {
            img {
                display: block;
                margin: 0 auto;
                width: 100%;
                box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
                border-radius: 10px;

                @media only screen and (min-width: ${breakpointMD}) {
                    width: 60%;
                }
            }
        }

        .arrow {
            width: 240px;
            display: flex;
            align-items: center;
            color: ${text};

            p {
                margin: ${gutterBase} 0;
            }

            img {
                height: 5em;
                z-index: 1;
            }

            &.right {
                margin-left: auto;
                img {
                    transform: rotate(-155deg);
                }

                @media only screen and (min-width: ${breakpointMD}) {
                    margin-left: 50%;
                }
            }

            &.left {
                p {
                    text-align: right;
                }
                img {
                    transform: rotate(155deg) scaleX(-1);
                }

                @media only screen and (min-width: ${breakpointMD}) {
                    margin-left: calc(50% - 240px);
                }
            }
        }
    }
`;

class HowItWorks extends Component {
    state = {
        lightbox: {
            index: 0,
            open: false,
        },
    }

    handleImageClick = (nextIndex, ev) => {
        ev.preventDefault();

        this.setState({
            lightbox: {
                index: nextIndex,
                open: true,
            },
        });
    };

    handleLightboxClose = () => {
        this.setState(evolve({
            lightbox: {
                open: always(false),
            },
        }));
    };

    handleLightboxPrev = () => {
        this.setState(evolve({
            lightbox: {
                index: compose(max(0), subtract(__, 1)),
            },
        }));
    };

    handleLightboxNext = () => {
        this.setState(evolve({
            lightbox: {
                index: compose(min(IMAGES.length - 1), add(1)),
            },
        }));
    };

    render() {
        const { lightbox } = this.state;
        const currentImage = IMAGES[lightbox.index];
        const nextImage = lightbox.index + 1 < IMAGES.length ? IMAGES[lightbox.index + 1] : null;
        const prevImage = lightbox.index > 0 ? IMAGES[lightbox.index - 1] : null;

        return (
            <Root id="how-it-works">
                <div className="row section-head">
                    <h1>How it works</h1>

                    <p>
                        Branch Bookkeeper is a simple queue management system that will keep track of merge
                        order for each PR and destination branch.
                        It integrates flawlessly in your existing workflow via its GitHub application.
                        Here&apos;s how it works:
                    </p>
                </div>

                <div className="row screenshot">
                    <div className="twelve columns">
                        <a href="images/walkthrough/github-red.png" onClick={partial(this.handleImageClick, [0])}>
                            <img
                                src="images/walkthrough/github-red.png"
                                alt="GitHub PR page with the Branch Bookkeeper check red, reading 'Not in the queue'"
                            />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <div className="arrow right">
                            <img src="images/arrow.svg" alt="" />
                            <p>Click on <em>Details</em> in your PR to see the queue</p>
                        </div>
                    </div>
                </div>

                <div className="row screenshot">
                    <div className="twelve columns">
                        <a href="images/walkthrough/bb-add-to-queue.png" onClick={partial(this.handleImageClick, [1])}>
                            <img
                                src="images/walkthrough/bb-add-to-queue.png"
                                alt="Branch Bookkeeper page showing a queue with one item and below that a PR card with an 'Add to queue' button"
                            />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <div className="arrow left">
                            <p>Click on <em>Add to queue</em> to enqueue your PR</p>
                            <img src="images/arrow.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="row screenshot">
                    <div className="twelve columns">
                        <a href="images/walkthrough/bb-in-queue.png" onClick={partial(this.handleImageClick, [2])}>
                            <img
                                src="images/walkthrough/bb-in-queue.png"
                                alt="Branch Bookkeeper page showing a queue with two items"
                            />
                        </a>
                    </div>
                </div>

                <div className="row section-head">
                    <p>
                        Now your PR is in queue to be merged, you can safely close the window and forget about it.
                        Branch Bookkeeper will make sure that all the PRs are merged in the right order.
                        {' '}<strong>No one can jump the queue!</strong>
                    </p>
                    <p>
                        When it&apos;s your turn, you&apos;ll receive a desktop notification:
                    </p>
                </div>

                <div className="row screenshot">
                    <div className="twelve columns">
                        <a href="images/walkthrough/notification.png" onClick={partial(this.handleImageClick, [3])}>
                            <img
                                src="images/walkthrough/notification.png"
                                alt="Desktop notification from Branch Bookkeper reading 'PR is first in the queue'"
                            />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <div className="arrow right">
                            <img src="images/arrow.svg" alt="" />
                            <p>Click on it to go straight to your PR</p>
                        </div>
                    </div>
                </div>

                <div className="row screenshot">
                    <div className="twelve columns">
                        <a href="images/walkthrough/github-green.png" onClick={partial(this.handleImageClick, [4])}>
                            <img
                                src="images/walkthrough/github-green.png"
                                alt="GitHub PR page with the Branch Bookkeeper check green, reading 'First in the queue'"
                            />
                        </a>
                    </div>
                </div>

                <div className="row section-head">
                    <p>
                        Once your PR is first in queue nobody else can merge,
                        you can take your time in rebasing and refining your work.
                        As soon as you merge, the next PR in line will get the green light.
                    </p>
                </div>

                {lightbox.open && (
                    <Lightbox
                        toolbarButtons={[]}
                        mainSrc={currentImage.url}
                        imageCaption={currentImage.caption}
                        nextSrc={nextImage ? nextImage.url : null}
                        prevSrc={prevImage ? prevImage.url : null}
                        onCloseRequest={this.handleLightboxClose}
                        onMovePrevRequest={this.handleLightboxPrev}
                        onMoveNextRequest={this.handleLightboxNext}
                    />
                )}
            </Root>
        );
    }
}

export default HowItWorks;
