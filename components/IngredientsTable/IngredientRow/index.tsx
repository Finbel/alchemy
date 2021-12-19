import { FC } from "react";
import type { Ingredient } from "../../../pages/api/ingredients";
import Cell from "./Cell";
import getEffectClass from "./utils/getEffectClass";
import getIngredientClass from "./utils/getIngredientClass";

type Props = {
  ingredient: Ingredient;
  selectedEffect?: string;
  selectedIngredient?: Ingredient;
  setSelectedEffect: (effect?: string) => void;
  setSelectedIngredient: (ingredient?: Ingredient) => void;
};

const IngredientRow: FC<Props> = ({
  ingredient,
  selectedEffect,
  setSelectedEffect,
  selectedIngredient,
  setSelectedIngredient,
}) => {
  return (
    <tr
      onMouseEnter={() => setSelectedIngredient(ingredient)}
      onMouseLeave={() => setSelectedIngredient(undefined)}
    >
      <Cell
        value={ingredient.name}
        className={getIngredientClass({
          ingredient,
          selectedEffect,
          selectedIngredient,
        })}
      />
      {ingredient.effects.map((effect) => (
        <Cell
          key={effect}
          value={effect}
          onMouseEnter={() => setSelectedEffect(effect)}
          onMouseLeave={() => setSelectedEffect(undefined)}
          className={getEffectClass({
            parent: ingredient,
            effect,
            selectedEffect,
            selectedIngredient,
          })}
        />
      ))}
    </tr>
  );
};

export default IngredientRow;
