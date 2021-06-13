import { useRouter } from 'next/router';
import styled from 'styled-components';

import { fetcher } from '../../api/fetcher';
import { getRecipePage } from '../../api/queries/pages/get-recipe-page';
import { getAllRecipeIds } from '../../api/queries/recipes/get-all-recipe-ids';
import { Hero } from '../../components/hero';
import { PageContent } from '../../components/page-layout/page-content';
import { Ingredient } from '../../components/recipes/ingredient';
import { Step } from '../../components/recipes/step';
import { Box } from '../../components/styled/box';
import { Flex } from '../../components/styled/flex';
import { Icon } from '../../components/styled/icon';
import { Section } from '../../components/styled/section';
import {
  H2,
  H4,
  H6,
  P1,
  Small,
  TextComponent,
} from '../../components/styled/text';
import { P1Style, P2Style } from '../../components/styled/typography';
import { Tag } from '../../components/tags';

const StyledRecipeBody = styled(TextComponent)`
  ${P2Style};
  b {
    ${P1Style};
  }
`;

export async function getStaticPaths() {
  const { recipeCollection } = await fetcher(getAllRecipeIds, {
    preview: true,
  });
  return {
    paths: recipeCollection.items.map(recipe => ({
      params: { slug: recipe.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { recipeCollection, pageRecipe } = await fetcher(getRecipePage, {
    preview: true,
    slug: params.slug,
  });

  return {
    props: { recipe: recipeCollection.items[0], pageRecipe },
  };
}

const Recipe = ({ recipe, pageRecipe }) => {
  console.log('recipe', recipe, pageRecipe);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero data={recipe.heroSection} variant="colored" height="560px">
        <Flex>
          {recipe.categoriesCollection.items.map(category => (
            <Tag key={category.sys.id} title={category.name} />
          ))}
        </Flex>
        <H2 color="white">{recipe.name}</H2>
        <P1 color="white" maxWidth="contentMediumWidth">
          {recipe.description}
        </P1>
        <Flex>
          <Flex alignItems="center" mr="M">
            <Icon type="schedule" size="1.6rem" color="white" />
            <Small ml="S" color="white">
              {pageRecipe.cookTimeText} {recipe.cookTime} min
            </Small>
          </Flex>
          <Flex alignItems="center">
            <Icon type="leaderboard" size="1.6rem" color="white" />
            <Small ml="S" color="white">
              {recipe.difficultyLevel.name}
            </Small>
          </Flex>
        </Flex>
      </Hero>
      <PageContent>
        <Section>
          <StyledRecipeBody richText={recipe.body.json} />
        </Section>
        <Section>
          <Flex flexDirection={['column', null, null, 'row']}>
            <Flex
              mb={['L', null, null, '0']}
              flex="0 0 30%"
              flexDirection="column"
            >
              <H4 mt="0">{pageRecipe.ingredientTitle}</H4>
              <P1
                fontSize="1.8rem"
                color="green50"
                mb="M"
              >{`${pageRecipe.personCountForText} ${recipe.personCount} ${pageRecipe.personCountText}`}</P1>
              <Box as="table" pl="0">
                <tbody>
                  {recipe.ingredientsCollection.items.map(ingredient => (
                    <Ingredient
                      key={ingredient.sys.id}
                      amount={ingredient.amount}
                      unit={ingredient.unit.shortTitle}
                      title={ingredient.title}
                    />
                  ))}
                </tbody>
              </Box>
              {recipe.drinkRecommendations &&
                recipe.drinkRecommendations.length > 0 && (
                  <Box mt="XL">
                    <H6 mt="0">{pageRecipe.drinkRecommendationTitle}</H6>
                    <P1>{recipe.drinkRecommendations.join(', ')}</P1>
                  </Box>
                )}
            </Flex>
            <Box flex="0 0 70%" flexDirection="column">
              <H4 mt="0">{pageRecipe.stepTitle}</H4>
              <Box as="ol" pl="L">
                {recipe.stepsCollection.items.map(step => (
                  <Step
                    key={step.sys.id}
                    title={step.title}
                    body={step.body.json}
                  />
                ))}
              </Box>
            </Box>
          </Flex>
        </Section>
      </PageContent>
    </div>
  );
};

export default Recipe;
