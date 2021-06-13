import styled from 'styled-components';

import { Box } from '../styled/box';

const StyledPageContent = styled(Box).attrs({
  bg: 'white',
})`
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

const PageContentWrapper = styled(Box).attrs({
  width: 'pageMaxWidth',
  mx: 'auto',
  pt: 'XL',
  pb: 'XXL',
})`
  max-width: 90%;
`;

export const PageContent = ({ children, ...props }) => {
  return (
    <StyledPageContent {...props}>
      <PageContentWrapper>{children}</PageContentWrapper>
    </StyledPageContent>
  );
};
