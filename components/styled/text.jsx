import React from 'react';
import styled, { css } from 'styled-components';
import { color, typography, system, space, grid } from 'styled-system';

import {
  H1Style,
  H2Style,
  H3Style,
  H4Style,
  H5Style,
  P1Style,
  P2Style,
  SmallStyle,
  LabelStyle,
} from './typography';
import { Box } from './box';

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

const TextBox = styled(Box)`
  ${TextStyles};
`;

export const TextComponent = ({ as, children, html, ...props }) => {
  return (
    <TextBox
      as={as}
      {...props}
      {...(html
        ? {
            dangerouslySetInnerHTML: {
              __html: html,
            },
          }
        : {})}
    >
      {children}
    </TextBox>
  );
};

// Headers
export const H1 = props => TextComponent({ as: H1Style, ...props });
export const H2 = props => TextComponent({ as: H2Style, ...props });
export const H3 = props => TextComponent({ as: H3Style, ...props });
export const H4 = props => TextComponent({ as: H4Style, ...props });
export const H5 = props => TextComponent({ as: H5Style, ...props });

// Texts
export const P1 = props => TextComponent({ as: P1Style, ...props });
export const P2 = props => TextComponent({ as: P2Style, ...props });
export const Small = props => TextComponent({ as: SmallStyle, ...props });
export const Label = props => TextComponent({ as: LabelStyle, ...props });
