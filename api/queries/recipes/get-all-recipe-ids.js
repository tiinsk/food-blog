import { gql } from 'graphql-request';

export const getAllRecipeIds = gql`
  query getAllRecipeIds($preview: Boolean) {
    recipeCollection(preview: $preview) {
      items {
        slug
      }
    }
  }
`;
