import { Filter } from '../components/filters';
import { Hero } from '../components/hero';
import { RecipeListItem } from '../components/recipes/recipe-list-item';
import { Section } from '../components/styled/section';
import { H5 } from '../components/styled/typography';
import ContentfulApi from '../contentful/api';

export async function getStaticProps() {
  // TODO add Promise.all
  const { pageHome, recipeCollection } = await ContentfulApi.getHomePageData();
  const {
    themeCollection,
    categoryCollection,
    keyIngredientCollection,
    difficultyLevelCollection,
  } = await ContentfulApi.getFilters();

  return {
    props: {
      home: pageHome,
      recipes: recipeCollection.items,
      filterValues: {
        theme: themeCollection.items,
        category: categoryCollection.items,
        keyIngredient: keyIngredientCollection.items,
        difficultyLevel: difficultyLevelCollection.items,
      },
    },
  };
}

const Home = ({ home, recipes, filterValues }) => {
  const { hero, newRecipesTitle, filter } = home;

  return (
    <div>
      <Hero data={hero} />
      <Section sectionProps={{ mt: '-100px' }}>
        <Filter data={filter} filterValues={filterValues} />
      </Section>
      <Section>
        <H5>{newRecipesTitle}</H5>
        {recipes.map(recipe => (
          <RecipeListItem key={recipe.slug} data={recipe} />
        ))}
      </Section>
    </div>
  );
};

export default Home;
