import getIngredientNames from "../../../utils/getIngredientNames";
import { Ingredient, ingredients } from "../../../pages/api/ingredients";
import getEffectNames from "../../../utils/getEffectNames";

const filterIngredient = (
  ingredient: Ingredient,
  ingredientFilter: string,
  effectFilter: string,
  plantable: boolean,
  fishable: boolean
) => {
  if (plantable && !ingredient.plantable) {
    return false;
  }
  if (fishable && !ingredient.fishable) {
    return false;
  }
  if (ingredientFilter) {
    if (
      getIngredientNames(ingredients)
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
      getEffectNames(ingredients)
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
