import { Ingredient } from "../pages/api/ingredients";

const getEffectNames = (ingredients: Ingredient[]) => {
  return [...new Set(ingredients.map(({ effects }) => effects).flat())];
};

export default getEffectNames;
