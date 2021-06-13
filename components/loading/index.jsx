import styled from 'styled-components';

import { Box } from '../styled/box';
import { Flex } from '../styled/flex';
import { Icon } from '../styled/icon';

const StyledLoadingIcon = styled(Flex).attrs({
  p: 'XL',
})`
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled(Box)`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 2s linear infinite;
`;

export const LoadingIcon = ({ ...props }) => {
  return (
    <StyledLoadingIcon>
      <IconWrapper>
        <Icon size="40px" color="grey50" type="restaurant" {...props} />
      </IconWrapper>
    </StyledLoadingIcon>
  );
};
