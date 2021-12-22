import React, { ChangeEvent, FC } from "react";
import { Input } from "../Input";
import styles from "./Filter.module.css";
import getEffectNames from "../../utils/getEffectNames";
import getIngredientNames from "./utils/getIngredientNames";

type Props = {
  ingredientFilter: string;
  setIngredientFilter: (filter: string) => void;
  effectFilter: string;
  setEffectFilter: (filter: string) => void;
};

const Filter: FC<Props> = ({
  ingredientFilter,
  setIngredientFilter,
  effectFilter,
  setEffectFilter,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <Input
          label={"Ingredient"}
          value={ingredientFilter}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setEffectFilter("");
            setIngredientFilter(event.target.value);
          }}
          suggestions={getIngredientNames()}
        />
        <Input
          label={"Effect"}
          value={effectFilter}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setEffectFilter(event.target.value);
            setIngredientFilter("");
          }}
          suggestions={getEffectNames()}
        />
      </div>
    </div>
  );
};

export default Filter;
