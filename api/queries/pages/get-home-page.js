import { gql } from 'graphql-request';

import { isPreview } from '../../../utils/is-preview';

export const getHomePage = gql`
  query getHomePage($preview: Boolean = ${isPreview}) {
    pageHome(id: "4r7BP0GcUzUyajjXbXkYkL", preview: $preview) {
      newRecipesTitle
      heroSection {
        title
        subtitle {
          json
        }
        image {
          url
        }
      }
      filterSection {
        title
        resultTitle
        noResultsTitle
        allFiltersButtonText
        applyButtonText
        filtersCollection(preview: $preview) {
          items {
            title
            filter
          }
        }
      }
    }
    recipeCollection(
      preview: $preview
      order: [sys_publishedAt_DESC]
      limit: 20
    ) {
      items {
        slug
        name
        description
        heroSection {
          image {
            url
          }
        }
        categoriesCollection(preview: $preview) {
          items {
            name
          }
        }
        cookTime
        difficultyLevel(preview: $preview) {
          name
          level
        }
      }
    }
  }
`;
