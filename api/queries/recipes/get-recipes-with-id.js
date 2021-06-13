import { gql } from 'graphql-request';

import { isPreview } from '../../../utils/is-preview';
import { recipeFragment } from '../../fragments/recipes';

export const getRecipesWithId = gql`
  ${recipeFragment}
  query getRecipesWithId($preview: Boolean = ${isPreview}, $ids: [String!]) {
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
