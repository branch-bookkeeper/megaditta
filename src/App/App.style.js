import styled, { injectGlobal } from 'styled-components';

import {
    bbOrange,
    white,
    pageBackground,
} from 'style/colors';
import Favicon from 'components/icons/Favicon';

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
