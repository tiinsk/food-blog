export default class ContentfulApi {
  static async callContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };

    try {
      return await fetch(fetchUrl, fetchOptions).then(response =>
        response.json()
      );
    } catch (error) {
      throw new Error('Could not fetch data from Contentful!');
    }
  }

  static async getHomePageData() {
    const query = `
      {
        pageHome(id: "4r7BP0GcUzUyajjXbXkYkL", preview: ${process.env.CONTENFUL_PREVIEW}) {
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
            allFiltersButtonText
            filtersCollection(preview: ${process.env.CONTENFUL_PREVIEW}) {
              items {
                title
                filter
              }
            }
          }
        }
        recipeCollection(preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            slug
            name
            description
            hero {
              image {
                url
              }
            }
            categoriesCollection(preview: ${process.env.CONTENFUL_PREVIEW}) {
              items {
                ... on Category {
                  name
                }
              }
            }
            cookTime
            difficultyLevel(preview: ${process.env.CONTENFUL_PREVIEW}) {
              name
              level
            }
          }
        }
      }
    `;

    const response = await this.callContentful(query);
    return response.data;
  }

  static async getRecipes() {
    const query = `
      {
        recipeCollection(preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            slug
          }
        }
      }
    `;

    const response = await this.callContentful(query);
    return response.data;
  }

  static async getRecipe(slug) {
    const query = `
      {
        pageRecipe(id: "7Akesfa7Ld45qdmgrDFIMt", preview: ${process.env.CONTENFUL_PREVIEW}) {
          stepTitle
          ingredientTitle
          personCountText
          cookTimeText
          drinkRecommendationTitle
        }
        recipeCollection(where: {slug: "${slug}"}, limit: 1, preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            slug
            name
            description
            body {
              json
            }
            hero {
              image {
                url
              }
            }
            categoriesCollection(preview: ${process.env.CONTENFUL_PREVIEW}, limit: 30) {
              items {
                sys {
                  id
                }
                name
              }
            }
            cookTime
            drinkRecommendations
            difficultyLevel(preview: ${process.env.CONTENFUL_PREVIEW}) {
              name
              level
            }
            stepsCollection(preview: ${process.env.CONTENFUL_PREVIEW}, limit: 30) {
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
            ingredientsCollection(preview: ${process.env.CONTENFUL_PREVIEW}, limit: 30) {
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
        }
      }
    `;

    const response = await this.callContentful(query);
    return response.data;
  }

  static async getFilters() {
    const query = `
      {
        themeCollection(order: [name_ASC], preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            name
          }
        }
        categoryCollection(order: [name_ASC], preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            name
          }
        }
        keyIngredientCollection(order: [name_ASC], preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            name
          }
        }
        difficultyLevelCollection(order: [level_ASC], preview: ${process.env.CONTENFUL_PREVIEW}) {
          items {
            name
            level
          }
        }
      }
    `;

    const response = await this.callContentful(query);
    return response.data;
  }
}
