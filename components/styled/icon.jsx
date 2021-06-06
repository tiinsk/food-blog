import styled from 'styled-components';

import { TextBox } from './text';

const StyledIcon = styled(TextBox)`
  font-family: ${({ theme }) => theme.fonts.materialIcons};

  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
`;

export const Icon = ({ type, size, ...props }) => (
  <StyledIcon {...props} fontSize={size || '24px'}>
    {type}
  </StyledIcon>
);

export const IconButton = ({ onClick, ...props }) => (
  <Icon {...props} as="button" onClick={onClick} />
);
