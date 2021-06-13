import flatten from 'lodash/flatten';
import { Fragment, useState } from 'react';
import styled from 'styled-components';

import { MenuList } from '../dropdowns/menu-list';
import { Box } from '../styled/box';
import { Button } from '../styled/button';
import { Flex } from '../styled/flex';
import { IconButton } from '../styled/icon';
import { Label } from '../styled/text';

const StyledAllFiltersMenu = styled(Box).attrs({
  mt: ['0', null, null, 'S'],
  position: ['fixed', null, null, 'absolute'],
  top: ['0', null, null, 'initial'],
  left: ['0', null, null, 'initial'],
  right: ['0', null, null, 'initial'],
  height: ['100vh', null, null, 'initial'],
  bg: ['blackTransparent', null, null, 'transparent'],
})`
  z-index: 1;
  width: 100%;
`;

const FiltersMenuWrapper = styled(Flex).attrs({
  p: 'L',
  bg: 'white',
  height: ['90vh', null, null, '500px'],
  margin: ['5vh 5vw', null, null, 'auto'],
})`
  max-height: 90vh;
  max-width: 90vw;

  flex-direction: column;

  border-radius: ${({ theme }) => theme.space.S}px;
  box-shadow: ${({ theme }) => theme.shadows.dropShadowDarker};
  border: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const GroupLabel = styled(Label).attrs({
  mt: 'M',
  mx: 'M',
  color: 'grey100',
})`
  &:first-of-type {
    margin-top: 0;
  }
`;

const GroupedFilters = styled(Flex).attrs({
  my: 'M',
  flexWrap: ['nowrap', null, null, 'wrap'],
})`
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
`;

export const AllFiltersMenu = ({
  title,
  applyButtonText,
  filters,
  filterOptions,
  selectedFilters,
  onApplyFilters,
  onClose,
}) => {
  const [updatedFilters, setUpdatedFilters] = useState(selectedFilters);

  const onUpdateFilterSelection = (filter, id) => {
    if (
      updatedFilters[filter] &&
      updatedFilters[filter].some(si => si === id)
    ) {
      setUpdatedFilters({
        ...updatedFilters,
        [filter]: updatedFilters[filter].filter(si => si !== id),
      });
    } else {
      setUpdatedFilters({
        ...updatedFilters,
        [filter]: [...(updatedFilters[filter] || []), id],
      });
    }
  };

  const preSelectedFiltersCount = flatten(
    Object.values(selectedFilters)
  ).length;
  const filterCount = flatten(Object.values(updatedFilters)).length;

  return (
    <StyledAllFiltersMenu>
      <FiltersMenuWrapper>
        <Flex width="100%" justifyContent="space-between">
          <Label>{title}</Label>
          <IconButton type="close" onClick={() => onClose()} />
        </Flex>
        <GroupedFilters>
          {filters.map(({ filter, title }) => (
            <Fragment key={filter}>
              <GroupLabel>{title}</GroupLabel>
              <MenuList
                options={filterOptions[filter].map(fv => ({
                  id: fv.name,
                  label: fv.name,
                }))}
                toggleOption={id => onUpdateFilterSelection(filter, id)}
                selectedIDs={updatedFilters[filter] || []}
                optionProps={{ mx: 'M' }}
              />
            </Fragment>
          ))}
        </GroupedFilters>
        <Flex justifyContent="flex-end" width="100%">
          <Button
            disabled={preSelectedFiltersCount === 0 && filterCount === 0}
            onClick={() => onApplyFilters(updatedFilters)}
          >
            {applyButtonText} {`(${filterCount})`}
          </Button>
        </Flex>
      </FiltersMenuWrapper>
    </StyledAllFiltersMenu>
  );
};
