import React, { FC } from "react";
import { ingredients, Ingredient } from "../../pages/api/ingredients";
import filterIngredient from "./utils/filterIngredient";
import {
  useEffectFilter,
  useFishable,
  useIngredientFilter,
  usePlantable,
} from "../FilterProvider";

export const IngredientContext = React.createContext<Ingredient[] | null>(null);

export const useIngredients = (): Ingredient[] => {
  const ingredients = React.useContext(IngredientContext);
  if (!ingredients) {
    throw new Error("useIngredients must be inside the FilterProvider");
  }
  return ingredients;
};

const IngredientsProvider: FC = ({ children }) => {
  const { plantable } = usePlantable();
  const { fishable } = useFishable();
  const { ingredientFilter } = useIngredientFilter();
  const { effectFilter } = useEffectFilter();
  const filteredIngredients = ingredients.filter((ingredient) =>
    filterIngredient(
      ingredient,
      ingredientFilter,
      effectFilter,
      plantable,
      fishable
    )
  );
  return (
    <IngredientContext.Provider value={filteredIngredients}>
      {children}
    </IngredientContext.Provider>
  );
};

export default IngredientsProvider;
