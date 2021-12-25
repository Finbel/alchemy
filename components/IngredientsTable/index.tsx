import { useState } from "react";
import { Ingredient } from "../../pages/api/ingredients";
import styles from "./IngredientsTable.module.css";
import IngredientRow from "./IngredientRow";
import { useIngredients } from "../../providers/IngredientsProvider";

const IngredientsTable = () => {
  const ingredients = useIngredients();
  const [selectedEffect, setSelectedEffect] = useState<string | undefined>(
    undefined
  );
  const [selectedIngredient, setSelectedIngredient] = useState<
    Ingredient | undefined
  >(undefined);
  return (
    <table className={styles.table}>
      <tbody>
        {ingredients.map((ingredient) => (
          <IngredientRow
            key={ingredient.name}
            ingredient={ingredient}
            selectedEffect={selectedEffect}
            setSelectedEffect={setSelectedEffect}
            selectedIngredient={selectedIngredient}
            setSelectedIngredient={setSelectedIngredient}
          />
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsTable;
