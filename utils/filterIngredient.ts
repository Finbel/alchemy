import getIngredientNames from "../components/Filter/utils/getIngredientNames";
import { Ingredient } from "../pages/api/ingredients";
import getEffectNames from "./getEffectNames";

const filterIngredient = (
  ingredient: Ingredient,
  ingredientFilter: string,
  effectFilter: string
) => {
  if (ingredientFilter) {
    if (
      getIngredientNames()
        .map((name) => name.toLowerCase())
        .includes(ingredientFilter.toLowerCase())
    ) {
      return ingredient.name === ingredientFilter;
    }
    return ingredient.name
      .toLowerCase()
      .includes(ingredientFilter.toLowerCase());
  }
  if (effectFilter) {
    if (
      getEffectNames()
        .map((name) => name.toLowerCase())
        .includes(effectFilter.toLowerCase())
    ) {
      return ingredient.effects
        .map((name) => name.toLowerCase())
        .some((effect) => effect === effectFilter.toLowerCase());
    }
    return ingredient.effects.some((effect) =>
      effect.toLowerCase().includes(effectFilter.toLowerCase())
    );
  }
  return true;
};

export default filterIngredient;
