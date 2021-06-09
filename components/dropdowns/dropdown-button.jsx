import styled, { css } from 'styled-components';

import { Box } from '../styled/box';
import { Icon } from '../styled/icon';
import { LabelStyle } from '../styled/typography';

const ButtonStyle = css`
  border-radius: ${({ theme }) => theme.space.S}px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey80};

  transition: background-color 0.1s ease-in;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue80};
    color: ${({ theme }) => theme.colors.blue90};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.blue50};
  }

  ${LabelStyle};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ isActive, theme }) => isActive && theme.colors.blue20};
`;

export const StyledDropdownButton = styled(Box).attrs({
  as: 'button',
  px: 'M',
  pr: 'S',
  py: 'XS',
})`
  ${ButtonStyle};
`;

export const DropdownButton = ({ children, forwardRef, ...props }) => {
  return (
    <StyledDropdownButton ref={forwardRef} {...props}>
      {children}
      <Icon type="arrow_drop_down" ml="S" />
    </StyledDropdownButton>
  );
};
