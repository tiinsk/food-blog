import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';

export const getUniqueRecipeIdsFromFilters = data => {
  const filterResultIds = data
    ? [
        ...data.categoryCollection.items.map(c =>
          c.linkedFrom.recipeCollection.items.map(r => r.sys.id)
        ),
        ...data.themeCollection.items.map(c =>
          c.linkedFrom.recipeCollection.items.map(r => r.sys.id)
        ),
        ...data.keyIngredientCollection.items.map(c =>
          c.linkedFrom.recipeCollection.items.map(r => r.sys.id)
        ),
        ...data.difficultyLevelCollection.items.map(c =>
          c.linkedFrom.recipeCollection.items.map(r => r.sys.id)
        ),
      ]
    : [];

  return uniq(flatten(filterResultIds));
};
