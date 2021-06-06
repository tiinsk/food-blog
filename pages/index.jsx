import { Hero } from '../components/hero';
import { RecipeListItem } from '../components/recipes/recipe-list-item';
import { Section } from '../components/styled/section';
import { H5 } from '../components/styled/typography';
import ContentfulApi from '../contentful/api';

export async function getStaticProps() {
  const { pageHome, recipeCollection } = await ContentfulApi.getHomePageData();

  return {
    props: {
      home: pageHome,
      recipes: recipeCollection.items,
    },
  };
}

const Home = ({ home, recipes }) => {
  const { hero, newRecipesTitle } = home;

  return (
    <div>
      <Hero data={hero} />
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
