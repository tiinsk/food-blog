import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import styled, { css } from 'styled-components';
import { color, grid, space, system, typography } from 'styled-system';

import { Box } from './box';
import {
  H1 as StyledH1,
  H2 as StyledH2,
  H3 as StyledH3,
  H4 as StyledH4,
  H5 as StyledH5,
  H6 as StyledH6,
  Label as StyledLabel,
  P1 as StyledP1,
  P2 as StyledP2,
  Small as StyledSmall,
  StyledRichText,
} from './typography';

const Ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextStyles = css`
  ${color};
  ${typography};
  ${space};
  ${system({
    whiteSpace: true,
    ellipsis: true,
  })};
  ${grid};
  ${props => props.ellipsis && Ellipsis};
`;

export const TextBox = styled(Box)`
  ${TextStyles};
`;

export const TextComponent = ({ as, children, ...props }) => {
  return (
    <TextBox as={as} {...props}>
      {children}
    </TextBox>
  );
};

export const RichText = ({ richText, ...props }) => {
  return (
    <TextBox as={StyledRichText} color="black" {...props}>
      {documentToReactComponents(richText)}
    </TextBox>
  );
};

// Headers
export const H1 = props => TextComponent({ as: StyledH1, ...props });
export const H2 = props => TextComponent({ as: StyledH2, ...props });
export const H3 = props => TextComponent({ as: StyledH3, ...props });
export const H4 = props => TextComponent({ as: StyledH4, ...props });
export const H5 = props => TextComponent({ as: StyledH5, ...props });
export const H6 = props => TextComponent({ as: StyledH6, ...props });

// Texts
export const P1 = props => TextComponent({ as: StyledP1, ...props });
export const P2 = props => TextComponent({ as: StyledP2, ...props });
export const Small = props => TextComponent({ as: StyledSmall, ...props });
export const Label = props => TextComponent({ as: StyledLabel, ...props });
