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
              title
              level
            }
          }
        }
      }
    `;

    const response = await this.callContentful(query);
    return response.data;
  }
}
