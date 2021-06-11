import { gql } from 'graphql-request';

import { recipeFragment } from '../../fragments/recipes';

export const getRecipesWithId = gql`
  ${recipeFragment}
  query getRecipesWithId($preview: Boolean, $ids: [String!]) {
    recipeCollection(
      where: { sys: { id_in: $ids } }
      limit: 30
      preview: true
    ) {
      items {
        ...recipeFragment
      }
    }
  }
`;
