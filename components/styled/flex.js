import styled from 'styled-components';
import { flexbox } from 'styled-system';

import { Box } from './box';

export const Flex = styled(Box)`
  display: flex;
  ${flexbox};
`;
