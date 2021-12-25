import { Ingredient } from "../pages/api/ingredients";

const getIngredientNames = (ingredients: Ingredient[]) => {
  return ingredients.map(({ name }) => name);
};

export default getIngredientNames;
