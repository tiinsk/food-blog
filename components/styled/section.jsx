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
  z-index: 1;
  ${sectionVariants};
`;

StyledSection.defaultProps = {
  variant: 'default',
};

export const Section = ({ children, variant, sectionProps, ...props }) => {
  return (
    <StyledSection variant={variant} my="XL" {...sectionProps}>
      <Flex
        flexDirection="column"
        width="pageMaxWidth"
        maxWidth="90%"
        mx="auto"
        {...props}
      >
        {children}
      </Flex>
    </StyledSection>
  );
};
