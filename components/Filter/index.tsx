import React, { ChangeEvent, FC, useState } from "react";
import { Input } from "../Input";
import styles from "./Filter.module.css";
import getEffectNames from "../../utils/getEffectNames";
import getIngredientNames from "../../utils/getIngredientNames";
import { Sidebar } from "../Sidebar";
import HamburgerIcon from "../HamburgerIcon";
import Checkbox from "../Checkbox";
import { useFishable, usePlantable } from "../../providers/FilterProvider";
import { useIngredients } from "../../providers/IngredientsProvider";

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
  const { plantable, setPlantable } = usePlantable();
  const { fishable, setFishable } = useFishable();
  const ingredients = useIngredients();

  return (
    <div className={styles.wrapper}>
      <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)}>
        <div>
          <p>Filter:</p>
          <Checkbox
            label={"Plantable"}
            checked={plantable}
            onChange={() => {
              setPlantable(!plantable);
            }}
          />
          <Checkbox
            label={"Fishable"}
            checked={fishable}
            onChange={() => {
              setFishable(!fishable);
            }}
          />
        </div>
      </Sidebar>
      <div className={styles.sidebarIcon} onClick={() => setSidebarOpen(true)}>
        <HamburgerIcon />
      </div>
      <div className={styles.filter}>
        <Input
          label={"Ingredient"}
          value={ingredientFilter}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setIngredientFilter(event.target.value)
          }
          suggestions={getIngredientNames(ingredients)}
        />
        <Input
          label={"Effect"}
          value={effectFilter}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEffectFilter(event.target.value)
          }
          suggestions={getEffectNames(ingredients)}
        />
      </div>
    </div>
  );
};

export default Filter;
