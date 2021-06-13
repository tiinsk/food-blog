import { gql } from 'graphql-request';

import { isPreview } from '../../../utils/is-preview';

export const getFilters = gql`
  query getFilters($preview: Boolean = ${isPreview}) {
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
