import { ingredients } from "../pages/api/ingredients";

const getEffectNames = () => {
  return [...new Set(ingredients.map(({ effects }) => effects).flat())];
};

export default getEffectNames;
