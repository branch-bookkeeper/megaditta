import React from 'react';
import styled from 'styled-components';

import { gutterSmall } from 'style/gutter';
import { text, white } from 'style/colors';

const Root = styled.section`
    &#features {
        .speech-bubble-wrapper {
            text-align: center;
        }

        .speech-bubble {
            display: inline-block;
            position: relative;
            top: -20px;
            background: ${text};
            color: ${white};
            border-radius: .4em;
            padding: ${gutterSmall};
            line-height: 1em;
            margin: 0 auto;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.8em;
        }

        .feature {
            img {
                height: 64px;
                display: block;
                margin: 0 auto;
            }
        }
    }
`;

export default () => (
    <Root id="features">
        <div className="row section-head">
            <h1>Extra features</h1>
        </div>
        <div className="row feature">
            <div className="six columns">
                <img src="images/check-circle.svg" alt="" />
                <div className="speech-bubble-wrapper" style={{ visibility: 'hidden' }}>
                    <div className="speech-bubble">Coming Soon</div>
                </div>
                <h3>Makes the wait easier</h3>
                <p>
                    On each push Branch Bookkeeper monitors the checks on your PR
                    and sends you a notification when they&apos;re completed.
                </p>
            </div>

            <div className="six columns">
                <img src="images/users.svg" alt="" />
                <div className="speech-bubble-wrapper">
                    <div className="speech-bubble">Coming Soon</div>
                </div>
                <h3>Admins have the power</h3>
                <p>
                    All admins of a repository will automatically have more powers at their fingertips.
                    Queue sorting, cleaning or locking - you name it!
                </p>
            </div>
        </div>

        <div className="row feature">
            <div className="six columns coming-soon">
                <img src="images/slack.svg" alt="" />
                <div className="speech-bubble-wrapper">
                    <div className="speech-bubble">Coming Soon</div>
                </div>
                <h3>Slack integration</h3>
                <p>
                    Are you a fan of Slack as much as we are? We&apos;ve got you covered.
                    You&apos;ll soon be able to receive all your notifications in there too!
                </p>
            </div>

            <div className="six columns coming-soon">
                <img src="images/cpu.svg" alt="" />
                <div className="speech-bubble-wrapper">
                    <div className="speech-bubble">Coming Soon</div>
                </div>
                <h3>Automate all the things</h3>
                <p>
                    Configuring a webhook you can make your workflow react to any change in the queue.
                    You can automatically rebase, merge or even deploy your code just monitoring the
                    position in the queue of a PR.
                </p>
            </div>
        </div>
    </Root>
);
