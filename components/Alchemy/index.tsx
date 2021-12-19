import React, { useState } from "react";
import { ingredients } from "../../pages/api/ingredients";
import IngredientsTable from "../IngredientsTable";
import Filter from "../Filter";
import filterIngredient from "./utils/filterIngredient";
import SearchInfo from "../SearchInfo";
import useWindowSize from "./utils/useWindowSize";
import styles from "./Alchemy.module.css";

export const Alchemy = () => {
  const [ingredientFilter, setIngredientFilter] = useState("");
  const [effectFilter, setEffectFilter] = useState("");
  const filteredIngredients = ingredients.filter((ingredient) =>
    filterIngredient(ingredient, ingredientFilter, effectFilter)
  );
  const size = useWindowSize();
  return (
    <>
      <Filter
        ingredientFilter={ingredientFilter}
        setIngredientFilter={setIngredientFilter}
        effectFilter={effectFilter}
        setEffectFilter={setEffectFilter}
      />
      <div className={styles.content}>
        {size.width && size.width > 500 ? (
          <IngredientsTable ingredients={filteredIngredients} />
        ) : (
          <SearchInfo
            ingredients={filteredIngredients}
            effectFilter={effectFilter}
          />
        )}
      </div>
    </>
  );
};
