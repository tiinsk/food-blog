import { useState } from 'react';
import styled from 'styled-components';

import { Dropdown } from '../dropdowns';
import { Box } from '../styled/box';
import { Button } from '../styled/button';
import { Flex } from '../styled/flex';
import { Label } from '../styled/text';
import { Tag } from '../tags';
import { AllFiltersMenu } from './all-filters-menu';

const StyledFilter = styled(Box).attrs({
  p: 'L',
  bg: 'white',
})`
  border-radius: ${({ theme }) => theme.space.S}px;
  box-shadow: ${({ theme }) => theme.shadows.dropShadow};
  border: 1px solid ${({ theme }) => theme.colors.grey30};
`;

const SelectedOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const Filter = ({
  filterSection,
  filterOptions,
  selectedFilters,
  onUpdateFilters,
}) => {
  const [isAllFiltersMenuOpen, setAllFiltersMenuOpen] = useState(false);

  const onUpdateFilterSelection = (filter, id) => {
    if (
      selectedFilters[filter] &&
      selectedFilters[filter].some(si => si === id)
    ) {
      onUpdateFilters({
        ...selectedFilters,
        [filter]: selectedFilters[filter].filter(si => si !== id),
      });
    } else {
      onUpdateFilters({
        ...selectedFilters,
        [filter]: [...(selectedFilters[filter] || []), id],
      });
    }
  };

  const filters = filterSection.filtersCollection.items;

  const selectedList = Object.keys(selectedFilters).reduce((acc, curr) => {
    const selected = selectedFilters[curr];
    return [...acc, ...selected.map(s => ({ filter: curr, value: s }))];
  }, []);

  const openAllFilters = isOpen => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.add('mobile-menu-open');
    }

    setAllFiltersMenuOpen(isOpen);
  };

  return (
    <Box position="relative">
      <StyledFilter>
        <Label color="grey100" mb="S">
          {filterSection.title}
        </Label>
        <Flex
          flexDirection={['column', null, null, 'row']}
          alignItems="flex-start"
        >
          <Box display={['none', null, null, 'initial']} width="100%">
            <Flex flexWrap="wrap" flexGrow={1}>
              {filters.map(({ filter, title }) => (
                <Box key={filter} mr="S">
                  <Dropdown
                    title={title}
                    options={filterOptions[filter].map(fv => ({
                      id: fv.name,
                      label: fv.name,
                    }))}
                    selectedOptions={selectedFilters[filter] || []}
                    onToggleSelection={id =>
                      onUpdateFilterSelection(filter, id)
                    }
                  />
                </Box>
              ))}
            </Flex>
          </Box>
          <Button
            ml={['0', null, null, 'M']}
            width={['100%', null, null, 'initial']}
            iconType="filter_list"
            onClick={() => openAllFilters(true)}
          >
            {filterSection.allFiltersButtonText}
          </Button>
        </Flex>
      </StyledFilter>
      {isAllFiltersMenuOpen && (
        <AllFiltersMenu
          title={filterSection.allFiltersButtonText}
          applyButtonText={filterSection.applyButtonText}
          filters={filters}
          filterOptions={filterOptions}
          selectedFilters={selectedFilters}
          onApplyFilters={filters => {
            onUpdateFilters(filters);
            openAllFilters(false);
          }}
          onClose={() => openAllFilters(false)}
        />
      )}
      <SelectedOptionsList>
        {selectedList.map(({ filter, value }) => (
          <Tag
            mr="S"
            mt="S"
            key={value}
            title={value}
            onRemove={() => onUpdateFilterSelection(filter, value)}
          />
        ))}
      </SelectedOptionsList>
    </Box>
  );
};
