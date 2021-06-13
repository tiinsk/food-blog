import { gql } from 'graphql-request';

export const recipeFragment = gql`
  fragment recipeFragment on Recipe {
    slug
    name
    description
    body {
      json
    }
    heroSection {
      image {
        url
      }
    }
    categoriesCollection(preview: $preview, limit: 30) {
      items {
        sys {
          id
        }
        name
      }
    }
    cookTime
    drinkRecommendations
    difficultyLevel(preview: $preview) {
      name
      level
    }
    stepsCollection(preview: $preview, limit: 30) {
      items {
        sys {
          id
        }
        title
        body {
          json
        }
      }
    }
    ingredientsCollection(preview: $preview, limit: 30) {
      items {
        sys {
          id
        }
        title
        amount
        unit {
          shortTitle
        }
      }
    }
  }
`;
