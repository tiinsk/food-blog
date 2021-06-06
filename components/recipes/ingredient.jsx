import styled from 'styled-components';

import { P1Style } from '../styled/typography';

const StyledIngredient = styled.tr`
  padding: ${({ theme }) => theme.space.S}px 0;
`;

const Amount = styled.td`
  ${P1Style};
  color: ${({ theme }) => theme.colors.blue90};
  font-weight: 700;
  text-transform: lowercase;
`;

const Title = styled.td`
  ${P1Style};
`;

export const Ingredient = ({ amount, unit, title }) => {
  return (
    <StyledIngredient>
      <Amount>{`${amount} ${unit}`}</Amount>
      <Title>{title}</Title>
    </StyledIngredient>
  );
};
