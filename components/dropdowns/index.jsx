import { useRef, useState } from 'react';
import styled from 'styled-components';

import { Box } from '../styled/box';
import { NumberTag } from '../tags/number-tag';
import { DropdownButton } from './dropdown-button';
import { MenuBox } from './menu-box';
import { MenuList } from './menu-list';

const StyledDropdown = styled(Box).attrs({})``;

export const Dropdown = ({
  title,
  options,
  selectedOptions,
  onToggleSelection,
}) => {
  const buttonRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <StyledDropdown>
      <DropdownButton
        forwardRef={buttonRef}
        isActive={isMenuOpen}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {title}
        {selectedOptions.length > 0 && (
          <NumberTag number={selectedOptions.length} />
        )}
      </DropdownButton>
      {isMenuOpen && (
        <MenuBox
          isOpen={isMenuOpen}
          onClose={() => setMenuOpen(false)}
          buttonRef={buttonRef}
        >
          <MenuList
            options={options}
            toggleOption={onToggleSelection}
            selectedIDs={selectedOptions}
          />
        </MenuBox>
      )}
    </StyledDropdown>
  );
};
