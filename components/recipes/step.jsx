import styled from 'styled-components';

import { Box } from '../styled/box';
import { H6, RichText } from '../styled/text';

const StyledStep = styled(Box).attrs({
  as: 'li',
  pl: 'M',
})`
  ::marker {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.green40};
    font-weight: 700;
    margin-right: ${({ theme }) => theme.space.M}px;
  }
`;

const StepBody = styled(RichText)`
  b {
    color: ${({ theme }) => theme.colors.blue90};
  }
`;

export const Step = ({ title, body }) => {
  return (
    <StyledStep>
      <H6>{title}</H6>
      <StepBody richText={body} />
    </StyledStep>
  );
};
