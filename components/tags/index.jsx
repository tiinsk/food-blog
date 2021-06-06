import styled from 'styled-components';

import { Flex } from '../styled/flex';
import { IconButton } from '../styled/icon';
import { Label } from '../styled/text';

const StyledTag = styled(Flex).attrs({
  px: 'M',
  py: 'XXS',
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purbleTransparent};
  border-radius: ${({ theme }) => theme.space.M}px;
`;

export const Tag = ({ title, onRemove }) => {
  return (
    <StyledTag>
      <Label color="purble100">{title}</Label>
      {onRemove && (
        <IconButton
          type="close"
          size={16}
          ml="S"
          mr="-4px"
          color="purble100"
          onClick={onRemove}
        />
      )}
    </StyledTag>
  );
};
