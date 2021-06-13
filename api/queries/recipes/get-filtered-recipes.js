import { gql } from 'graphql-request';

import { isPreview } from '../../../utils/is-preview';

export const getFilteredRecipes = gql`
  query getFilteredRecipes(
    $preview: Boolean = ${isPreview}
    $theme: [String!] = []
    $category: [String!] = []
    $keyIngredient: [String!] = []
    $difficultyLevel: [String!] = []
  ) {
    categoryCollection(
      preview: $preview
      limit: 30
      where: { name_in: $category }
    ) {
      items {
        name
        linkedFrom {
          recipeCollection(preview: $preview, limit: 30) {
            items {
              sys {
                id
              }
            }
          }
        }
      }
    }
    themeCollection(preview: $preview, limit: 30, where: { name_in: $theme }) {
      items {
        name
        linkedFrom {
          recipeCollection(preview: $preview, limit: 30) {
            items {
              sys {
                id
              }
            }
          }
        }
      }
    }
    keyIngredientCollection(
      preview: $preview
      limit: 30
      where: { name_in: $keyIngredient }
    ) {
      items {
        name
        linkedFrom {
          recipeCollection(preview: $preview, limit: 30) {
            items {
              sys {
                id
              }
            }
          }
        }
      }
    }
    difficultyLevelCollection(
      preview: $preview
      limit: 30
      where: { name_in: $difficultyLevel }
    ) {
      items {
        name
        linkedFrom {
          recipeCollection(preview: $preview, limit: 30) {
            items {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`;
