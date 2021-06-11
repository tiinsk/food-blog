import { gql } from 'graphql-request';

export const getFilters = gql`
  query getFilters($preview: Boolean) {
    themeCollection(order: [name_ASC], preview: $preview) {
      items {
        name
      }
    }
    categoryCollection(order: [name_ASC], preview: $preview) {
      items {
        name
      }
    }
    keyIngredientCollection(order: [name_ASC], preview: $preview) {
      items {
        name
      }
    }
    difficultyLevelCollection(order: [level_ASC], preview: $preview) {
      items {
        name
        level
      }
    }
  }
`;
