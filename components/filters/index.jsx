import { useState } from 'react';
import styled from 'styled-components';

import { Dropdown } from '../dropdowns';
import { Box } from '../styled/box';
import { Button } from '../styled/button';
import { Flex } from '../styled/flex';
import { Label } from '../styled/text';
import { Tag } from '../tags';

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
`;

export const Filter = ({ data, filterValues }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const onUpdateFilterSelection = (filter, id) => {
    if (
      selectedFilters[filter] &&
      selectedFilters[filter].some(si => si === id)
    ) {
      setSelectedFilters({
        ...selectedFilters,
        [filter]: selectedFilters[filter].filter(si => si !== id),
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [filter]: [...(selectedFilters[filter] || []), id],
      });
    }
  };

  const filters = data.filtersCollection.items;

  const selectedList = Object.keys(selectedFilters).reduce((acc, curr) => {
    const selected = selectedFilters[curr];
    return [...acc, ...selected.map(s => ({ filter: curr, value: s }))];
  }, []);

  return (
    <div>
      <StyledFilter>
        <Label color="grey100" mb="S">
          {data.title}
        </Label>
        <Flex>
          <Flex flexGrow={1}>
            {filters.map(({ filter, title }) => (
              <Box key={filter} mr="S">
                <Dropdown
                  title={title}
                  options={filterValues[filter].map(fv => ({
                    id: fv.name,
                    label: fv.name,
                  }))}
                  selectedOptions={selectedFilters[filter] || []}
                  onToggleSelection={id => onUpdateFilterSelection(filter, id)}
                />
              </Box>
            ))}
          </Flex>
          <Button ml="M" iconType="filter_list">
            {data.allFiltersButtonText}
          </Button>
        </Flex>
      </StyledFilter>
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
    </div>
  );
};
