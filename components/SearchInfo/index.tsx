import { FC } from "react";
import { ingredients } from "../../pages/api/ingredients";
import filterIngredient from "../../utils/filterIngredient";
import getEffectNames from "../../utils/getEffectNames";
import getIngredientNames from "../Filter/utils/getIngredientNames";
import styles from "./SearchInfo.module.css";

const getTitleString = (ingredientFilter: string, effectFilter: string) => {
  if (getIngredientNames().includes(ingredientFilter)) {
    return `Effects of ${ingredientFilter}`;
  }
  if (getEffectNames().includes(effectFilter)) {
    return `Ingredients with ${effectFilter}`;
  }
  return "Search for an ingredient or an effect";
};

const getList = (ingredientFilter: string, effectFilter: string) => {
  if (getIngredientNames().includes(ingredientFilter)) {
    return (
      ingredients.find(({ name }) => name === ingredientFilter)?.effects || []
    );
  }
  if (getEffectNames().includes(effectFilter)) {
    return ingredients
      .filter((ingredient) =>
        filterIngredient(ingredient, ingredientFilter, effectFilter)
      )
      .map(({ name }) => name);
  }
  return [];
};

type Props = {
  ingredientFilter: string;
  effectFilter: string;
  setEffectFilter: (effectFilter: string) => void;
  setIngredientFilter: (ingredientFilter: string) => void;
};

const SearchInfo: FC<Props> = ({
  ingredientFilter,
  effectFilter,
  setEffectFilter,
  setIngredientFilter,
}) => {
  const titleString = getTitleString(ingredientFilter, effectFilter);
  const displayStrings = getList(ingredientFilter, effectFilter);
  return (
    <div className={styles.wrapper}>
      {titleString}
      <div className={styles.searchInfo}>
        {displayStrings.map((string) => (
          <div
            key={string}
            onClick={
              ingredientFilter
                ? () => {
                    setEffectFilter(string);
                    setIngredientFilter("");
                  }
                : undefined
            }
          >
            {string}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInfo;
