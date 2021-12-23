import { FC } from "react";
import { ingredients } from "../../pages/api/ingredients";
import filterIngredient from "../../utils/filterIngredient";
import getEffectNames from "../../utils/getEffectNames";
import getIngredientNames from "../Filter/utils/getIngredientNames";
import styles from "./SearchInfo.module.css";

const getTitleString = (ingredientFilter: string, effectFilter: string) => {
  if (
    getIngredientNames()
      .map((name) => name.toLowerCase())
      .includes(ingredientFilter.toLowerCase())
  ) {
    return `Effects of ${ingredientFilter}`;
  }
  if (
    getEffectNames()
      .map((name) => name.toLowerCase())
      .includes(effectFilter.toLowerCase())
  ) {
    return `Ingredients with ${effectFilter}`;
  }
  return "Search for an ingredient or an effect";
};

const getList = (ingredientFilter: string, effectFilter: string) => {
  if (
    getIngredientNames()
      .map((name) => name.toLowerCase())
      .includes(ingredientFilter.toLowerCase())
  ) {
    return (
      ingredients.find(({ name }) => name === ingredientFilter)?.effects || []
    );
  }
  if (
    getEffectNames()
      .map((name) => name.toLowerCase())
      .includes(effectFilter.toLowerCase())
  ) {
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
                    setIngredientFilter("");
                    setEffectFilter(string);
                  }
                : () => {
                    setEffectFilter("");
                    setIngredientFilter(string);
                  }
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
