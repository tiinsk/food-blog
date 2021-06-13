import { gql } from 'graphql-request';

import { isPreview } from '../../../utils/is-preview';
import { recipeFragment } from '../../fragments/recipes';

export const getRecipePage = gql`
  ${recipeFragment}
  query getRecipePage($preview: Boolean = ${isPreview}, $slug: String!) {
    pageRecipe(id: "7Akesfa7Ld45qdmgrDFIMt", preview: $preview) {
      stepTitle
      ingredientTitle
      personCountText
      personCountForText
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
