import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './breakpoints';
import { colors, shadows } from './colors';
import { fonts } from './fonts';
import { spaces } from './spaces';

export const theme = {
  space: spaces,
  breakpoints: [
    breakpoints.phone,
    breakpoints.tablet,
    breakpoints.screenS,
    breakpoints.screenM,
    breakpoints.screenL,
  ],
  mediaQueries: {
    phone: `@media (max-width: ${breakpoints.phone})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    screenS: `@media (max-width: ${breakpoints.screenS})`,
    screenM: `@media (max-width: ${breakpoints.screenM})`,
    screenL: `@media (max-width: ${breakpoints.screenL})`,
  },
  colors,
  shadows,
  sizes: {
    pageMaxWidth: '1300px',
    contentXSmallWidth: '176px',
    contentSmallWidth: '448px',
    contentMediumWidth: '768px',
  },
  fonts,
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.paragraphs};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; //1.5rem -> 15px, 1.4rem ->14px etc.
  }
  
  body {
    font-size: 1.5rem;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }
  
  p {
    margin: 0;
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
  
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    
    &:disabled {
      cursor: not-allowed;
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
