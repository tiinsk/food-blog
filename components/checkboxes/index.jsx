import styled, { css } from 'styled-components';

import { Flex } from '../styled/flex';
import { Icon } from '../styled/icon';
import { SmallStyle } from '../styled/typography';

const CheckboxWrapper = styled(Flex)`
  align-items: center;
`;

const CheckedStyle = css`
  background-color: ${({ theme }) => theme.colors.blue80};
  border-width: 0;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledCheckbox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.blue40};
  border-radius: 1px;

  width: 12px;
  height: 12px;
  padding: 0;
  margin-right: ${({ theme }) => theme.space.S}px;

  ${({ isChecked }) => isChecked && CheckedStyle};
`;

const Label = styled.button`
  flex-grow: 1;
  text-align: left;
  ${SmallStyle};
`;

export const Checkbox = ({ id, label, isChecked, onClick }) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox id={id} isChecked={isChecked} onClick={() => onClick(id)}>
        {isChecked && <Icon type="check" size="8px" />}
      </StyledCheckbox>
      <Label htmlFor={id} onClick={() => onClick(id)}>
        {label}
      </Label>
    </CheckboxWrapper>
  );
};
