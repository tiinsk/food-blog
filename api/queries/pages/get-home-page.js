import { gql } from 'graphql-request';

export const getHomePage = gql`
  query getHomePage($preview: Boolean) {
    pageHome(id: "4r7BP0GcUzUyajjXbXkYkL", preview: $preview) {
      newRecipesTitle
      hero {
        title
        subtitle {
          json
        }
        image {
          url
        }
      }
      filter {
        title
        resultTitle
        noResultsTitle
        allFiltersButtonText
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
        hero {
          image {
            url
          }
        }
        categoriesCollection(preview: $preview) {
          items {
            ... on Category {
              name
            }
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
