import { ingredients } from "../../../pages/api/ingredients";

const getIngredientNames = () => {
  return ingredients.map(({ name }) => name);
};

export default getIngredientNames;
