import styled from 'styled-components';

import { Checkbox } from '../checkboxes';
import { Box } from '../styled/box';

const MenuOption = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey40};
`;

export const MenuList = ({
  options,
  selectedIDs,
  toggleOption,
  optionProps,
}) => {
  return (
    <>
      {options.map(({ id, label }) => (
        <MenuOption key={id} {...optionProps}>
          <Checkbox
            id={id}
            isChecked={selectedIDs.some(si => si === id)}
            label={label}
            onClick={() => toggleOption(id)}
          />
        </MenuOption>
      ))}
    </>
  );
};
