import styled from 'styled-components';

import { Flex } from '../styled/flex';
import { Label } from '../styled/text';

const StyledNumberTag = styled(Flex).attrs({
  px: 'S',
  py: 'XXS',
  ml: 'S',
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue50};
  border-radius: ${({ theme }) => theme.space.S}px;
`;

export const NumberTag = ({ number, ...props }) => {
  return (
    <StyledNumberTag {...props}>
      <Label lineHeight="1.2rem" color="white">
        {number}
      </Label>
    </StyledNumberTag>
  );
};
