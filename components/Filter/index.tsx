import React, { ChangeEvent, FC, useState } from "react";
import { Input } from "../Input";
import styles from "./Filter.module.css";
import getEffectNames from "../../utils/getEffectNames";
import getIngredientNames from "./utils/getIngredientNames";
import { Sidebar } from "../Sidebar";
import HamburgerIcon from "../HamburgerIcon";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div onClick={() => setSidebarOpen(true)}>
        <HamburgerIcon size="m" />
      </div>
      <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />
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
