import { gql } from 'graphql-request';

import { recipeFragment } from '../../fragments/recipes';

export const getRecipePage = gql`
  ${recipeFragment}
  query getRecipePage($preview: Boolean, $slug: String!) {
    pageRecipe(id: "7Akesfa7Ld45qdmgrDFIMt", preview: $preview) {
      stepTitle
      ingredientTitle
      personCountText
      cookTimeText
      drinkRecommendationTitle
    }
    recipeCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
      items {
        ...recipeFragment
      }
    }
  }
`;
