import { Ingredient } from "../../../../pages/api/ingredients";
import styles from "../Cell/Cell.module.css";

type Args = {
  ingredient: Ingredient;
  selectedEffect?: string;
  selectedIngredient?: Ingredient;
};

const getIngredientClass = ({
  ingredient,
  selectedEffect,
  selectedIngredient,
}: Args): string => {
  return (selectedEffect && ingredient.effects.includes(selectedEffect)) ||
    (selectedEffect === undefined && selectedIngredient === undefined) ||
    (selectedIngredient && selectedIngredient.name === ingredient.name)
    ? styles.active
    : styles.inActive;
};

export default getIngredientClass;
