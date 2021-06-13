import { Link } from 'next';
import styled, { css } from 'styled-components';

import { Box } from './box';
import { Icon } from './icon';
import { LabelStyle } from './typography';

const ButtonStyle = css`
  border-radius: ${({ theme }) => theme.space.S}px;
  background-color: ${({ theme }) => theme.colors.blue90};

  transition: background-color 0.1s ease-in;

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue100};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.blue50};
  }

  ${LabelStyle};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledButton = styled(Box).attrs({
  as: 'button',
  px: 'M',
  py: 'XS',
})`
  ${ButtonStyle};
`;

export const LinkButton = styled(Box).attrs({
  as: Link,
  px: 'M',
  py: 'XS',
})`
  ${ButtonStyle};
`;

export const Button = ({ children, iconType, ...props }) => {
  return (
    <StyledButton {...props}>
      {iconType && <Icon type={iconType} mr="S" />}
      {children}
    </StyledButton>
  );
};
