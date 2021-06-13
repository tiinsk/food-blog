import stringify from 'json-stable-stringify';
import flatten from 'lodash/flatten';
import { useState } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';

import { fetcher } from '../api/fetcher';
import { getFilters } from '../api/queries/filters/get-all-filters';
import { getHomePage } from '../api/queries/pages/get-home-page';
import { getFilteredRecipes } from '../api/queries/recipes/get-filtered-recipes';
import { getRecipesWithId } from '../api/queries/recipes/get-recipes-with-id';
import { Filter } from '../components/filters';
import { Hero } from '../components/hero';
import { PageContent } from '../components/page-layout/page-content';
import { RecipeListItem } from '../components/recipes/recipe-list-item';
import { Grid } from '../components/styled/grid';
import { Section } from '../components/styled/section';
import { P1 } from '../components/styled/text';
import { H5 } from '../components/styled/typography';
import { getUniqueRecipeIdsFromFilters } from '../utils/filters';

const RecipeList = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export async function getStaticProps() {
  // TODO add Promise.all
  const { pageHome, recipeCollection } = await fetcher(getHomePage);
  const {
    themeCollection,
    categoryCollection,
    keyIngredientCollection,
    difficultyLevelCollection,
  } = await fetcher(getFilters);

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
  const { heroSection, newRecipesTitle, filterSection } = home;
  const [selectedFilters, setSelectedFilters] = useState({});

  const filterCount = flatten(Object.values(selectedFilters)).length;
  const stringifiedFilters = stringify(selectedFilters);

  const { data, error } = useSWR(
    [getFilteredRecipes, stringifiedFilters],
    query =>
      filterCount > 0
        ? fetcher(query, { preview: true, ...selectedFilters })
        : null
  );

  const uniqueRecipes = data ? getUniqueRecipeIdsFromFilters(data) : [];
  const stringifiedIds = stringify(uniqueRecipes);

  const { data: recipeData, error: recipeError } = useSWR(
    [getRecipesWithId, stringifiedIds],
    query => (uniqueRecipes.length ? fetcher(query, { uniqueRecipes }) : null)
  );

  return (
    <div>
      <Hero data={heroSection} pb="20vh" />
      <PageContent>
        <Section sectionProps={{ top: '-130px', mb: '-130px' }}>
          <Filter
            selectedFilters={selectedFilters}
            onUpdateFilters={filters => setSelectedFilters(filters)}
            filterSection={filterSection}
            filterOptions={filterOptions}
          />
        </Section>
        <Section>
          {filterCount === 0 ? (
            <>
              <H5>{newRecipesTitle}</H5>
              <RecipeList>
                {recipes.map(recipe => (
                  <RecipeListItem key={recipe.slug} data={recipe} />
                ))}
              </RecipeList>
            </>
          ) : (
            <>
              <H5>{filterSection.resultTitle}</H5>
              {recipeData && recipeData.recipeCollection ? (
                <RecipeList>
                  recipeData.recipeCollection.items.map(recipe => (
                  <RecipeListItem key={recipe.slug} data={recipe} />
                  ))
                </RecipeList>
              ) : (
                <P1>{filterSection.noResultsTitle}</P1>
              )}
            </>
          )}
        </Section>
      </PageContent>
    </div>
  );
};

export default Home;
