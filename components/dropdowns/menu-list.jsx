import { useRef } from 'react';
import styled from 'styled-components';

import { useClickOutside } from '../../hooks/useClickOutside';
import { Checkbox } from '../checkboxes';
import { Box } from '../styled/box';

const StyledMenuList = styled(Box).attrs({
  mt: 'S',
  p: 'M',
  bg: 'white',
})`
  position: absolute;
  z-index: 1;

  width: ${({ theme }) => theme.sizes.contentXSmallWidth};

  border-radius: ${({ theme }) => theme.space.S}px;
  box-shadow: ${({ theme }) => theme.shadows.dropShadowDarker};
  border: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const MenuOption = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey40};
`;

export const MenuList = ({
  isOpen,
  options,
  selectedIDs,
  toggleOption,
  onClose,
  buttonRef,
}) => {
  const listRef = useRef(null);
  useClickOutside(onClose, isOpen, listRef, buttonRef);

  return (
    <StyledMenuList ref={listRef}>
      {options.map(({ id, label }) => (
        <MenuOption key={id}>
          <Checkbox
            id={id}
            isChecked={selectedIDs.some(si => si === id)}
            label={label}
            onClick={() => toggleOption(id)}
          />
        </MenuOption>
      ))}
    </StyledMenuList>
  );
};
