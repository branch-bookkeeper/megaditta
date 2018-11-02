import styled, { injectGlobal } from 'styled-components';

import {
    bbOrange,
    white,
    invertedText,
    pageBackground,
} from 'style/colors';
import { gutterSmall } from 'style/gutter';
import { breakpointMD } from 'style/mediaQuery';
import Favicon from 'components/icons/Favicon';
import LogoMonochrome from 'components/icons/LogoMonochrome';
import LogoTextMonochrome from 'components/icons/LogoTextMonochrome';

const headerHeight = '54px';

injectGlobal`
    body {
        background-color: ${pageBackground};
    }
`;

export const LogoWrapper = styled.div`
    && {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export const Header = styled.header`
    background-color: ${bbOrange[500]};

    nav#nav-wrap ul#nav {
        background-color: ${bbOrange[700]};
        padding: 24px 36px;

        li {
            border-bottom-color: ${bbOrange[400]};

            &:last-child {
                border-bottom: none;
            }
        }

        @media only screen and (min-width: ${breakpointMD}) {
            background-color: transparent;
            padding: 0;
        }
    }

    ul#nav li a,
    .header-social li a {
        color: ${bbOrange[100]};

        &:hover {
            color: ${white};
        }
    }

    ul#nav li.current a {
        color: ${white};
    }
`;

export const HeaderLogo = styled(Favicon)`
    fill: ${bbOrange[50]};
    height: calc(${headerHeight} - 20px);
`;

export const Footer = styled.footer`
    text-align: center;
    background: #181c21;
    color: ${white};
    padding-bottom: 60px;
    margin-bottom: 0;

    .Footer-logo {
        display: inline-block;
    }

    iframe {
        display: inline-block;
        vertical-align: middle;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > *:not(:last-child) {
            margin-top: ${gutterSmall};
        }

        @media only screen and (min-width: ${breakpointMD}) {
            flex-direction: row;
            & > *:not(:last-child) {
                margin-top: 0;
                margin-right: ${gutterSmall};
            }
        }
    }

    a {
        transition: none;
        color: ${white};
        text-decoration: underline;
        text-decoration-style: dotted;
        text-decoration-color: #bbb;
        text-underline-position: under;
        &:visited {
            color: ${white};
        }
        &:hover,
        &:active {
            text-decoration-style: solid;
            text-decoration-color: ${bbOrange[500]};
            color: ${bbOrange[500]};
        }
    }
`;

export const FooterLogo = styled(LogoMonochrome)`
    fill: ${invertedText};
    width: 70px;

    @media only screen and (min-width: ${breakpointMD}) {
        width: 100px;
    }
`;

export const FooterTextLogo = styled(LogoTextMonochrome)`
    fill: ${invertedText};
    width: 150px;
    transform: translateY(-23px);

    @media only screen and (min-width: ${breakpointMD}) {
        width: 200px;
        transform: translateY(-35px);
    }
`;
