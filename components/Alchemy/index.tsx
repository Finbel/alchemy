import React from "react";
import IngredientsTable from "../IngredientsTable";
import Filter from "../Filter";
import SearchInfo from "../SearchInfo";
import useWindowSize from "../../utils/useWindowSize";
import styles from "./Alchemy.module.css";
import {
  useEffectFilter,
  useIngredientFilter,
} from "../../providers/FilterProvider";
import { useIngredients } from "../../providers/IngredientsProvider";

export const Alchemy = () => {
  const { ingredientFilter, setIngredientFilter } = useIngredientFilter();
  const { effectFilter, setEffectFilter } = useEffectFilter();
  const ingredients = useIngredients();
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
          <IngredientsTable ingredients={ingredients} />
        ) : (
          <SearchInfo
            ingredientFilter={ingredientFilter}
            effectFilter={effectFilter}
            setEffectFilter={setEffectFilter}
            setIngredientFilter={setIngredientFilter}
          />
        )}
      </div>
    </>
  );
};
