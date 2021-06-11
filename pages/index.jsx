import stringify from 'json-stable-stringify';
import flatten from 'lodash/flatten';
import { useState } from 'react';
import useSWR from 'swr';

import { fetcher } from '../api/fetcher';
import { getFilters } from '../api/queries/filters/get-all-filters';
import { getHomePage } from '../api/queries/pages/get-home-page';
import { getFilteredRecipes } from '../api/queries/recipes/get-filtered-recipes';
import { getRecipesWithId } from '../api/queries/recipes/get-recipes-with-id';
import { Filter } from '../components/filters';
import { Hero } from '../components/hero';
import { RecipeListItem } from '../components/recipes/recipe-list-item';
import { Section } from '../components/styled/section';
import { P1 } from '../components/styled/text';
import { H5 } from '../components/styled/typography';
import { getUniqueRecipeIdsFromFilters } from '../utils/filters';

export async function getStaticProps() {
  // TODO add Promise.all
  const { pageHome, recipeCollection } = await fetcher(getHomePage, {
    preview: true,
  });
  const {
    themeCollection,
    categoryCollection,
    keyIngredientCollection,
    difficultyLevelCollection,
  } = await fetcher(getFilters, { preview: true });

  return {
    props: {
      home: pageHome,
      recipes: recipeCollection.items,
      filterOptions: {
        theme: themeCollection.items,
        category: categoryCollection.items,
        keyIngredient: keyIngredientCollection.items,
        difficultyLevel: difficultyLevelCollection.items,
      },
    },
  };
}

const Home = ({ home, recipes, filterOptions }) => {
  const { hero, newRecipesTitle, filter } = home;
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <div>
      <Hero data={hero} />
      <Section sectionProps={{ mt: '-100px' }}>
        <Filter
          selectedFilters={selectedFilters}
          onUpdateFilters={filters => setSelectedFilters(filters)}
          filterSection={filter}
          filterOptions={filterOptions}
        />
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
