import { Ingredient } from "../../../../pages/api/ingredients";
import styles from "../Cell/Cell.module.css";

type Args = {
  parent: Ingredient;
  effect: string;
  selectedEffect?: string;
  selectedIngredient?: Ingredient;
};

const getEffectClass = ({
  parent,
  effect,
  selectedEffect,
  selectedIngredient,
}: Args): string => {
  const isParentActive =
    selectedEffect === undefined || parent.effects.includes(selectedEffect);
  const isActive = effect === selectedEffect;
  if (isActive || (!selectedEffect && !selectedIngredient)) {
    return styles.active;
  }
  if (
    selectedIngredient &&
    selectedIngredient.effects.includes(effect) &&
    isParentActive
  ) {
    return styles.secondary;
  }
  return styles.inActive;
};

export default getEffectClass;
