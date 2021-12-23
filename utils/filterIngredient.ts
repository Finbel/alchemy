import { Ingredient } from "../pages/api/ingredients";

const filterIngredient = (
  ingredient: Ingredient,
  ingredientFilter: string,
  effectFilter: string
) => {
  const ingredientOK =
    !ingredientFilter ||
    ingredient.name.toLowerCase().includes(ingredientFilter.toLowerCase());
  const effectOK =
    !effectFilter ||
    ingredient.effects.some((effect) =>
      effect.toLowerCase().includes(effectFilter.toLowerCase())
    );
  return ingredientOK && effectOK;
};

export default filterIngredient;
