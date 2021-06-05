import { createGlobalStyle } from 'styled-components';

import { spaces } from './spaces';
import { colors } from './colors';

export const pageMaxWidth = '1300px';

export const theme = {
  space: spaces,
  breakpoints: [],
  mediaQueries: {},
  colors: colors,
  sizes: {
    pageMaxWidth,
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%; //1.5rem -> 15px, 1.4rem ->14px etc.
  }
  
  body {
    font-size: 1.5rem;
  }
`;
