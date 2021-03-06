import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from './box';
import { Flex } from './flex';

const sectionVariants = variant({
  variants: {
    default: {
      background: 'transparent',
    },
  },
});

export const StyledSection = styled(Box)`
  position: relative;
  ${sectionVariants};
`;

StyledSection.defaultProps = {
  variant: 'default',
};

export const Section = ({ children, variant, sectionProps, ...props }) => {
  return (
    <StyledSection variant={variant} my="L" {...sectionProps}>
      <Flex flexDirection="column" {...props}>
        {children}
      </Flex>
    </StyledSection>
  );
};
