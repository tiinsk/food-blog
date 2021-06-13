import { gql } from 'graphql-request';

export const getHomePage = gql`
  query getHomePage($preview: Boolean) {
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
    recipeCollection(preview: $preview) {
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
