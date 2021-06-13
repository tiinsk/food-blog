import { gql } from 'graphql-request';

import { isPreview } from '../../../utils/is-preview';

export const getAllRecipeIds = gql`
  query getAllRecipeIds($preview: Boolean = ${isPreview}) {
    recipeCollection(preview: $preview) {
      items {
        slug
      }
    }
  }
`;
