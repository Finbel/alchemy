import { FC } from "react";
import { Ingredient } from "../../pages/api/ingredients";
import { useIngredients } from "../../providers/IngredientsProvider";
import getEffectNames from "../../utils/getEffectNames";
import getIngredientNames from "../../utils/getIngredientNames";
import styles from "./SearchInfo.module.css";

const getTitleString = (
  ingredients: Ingredient[],
  ingredientFilter: string,
  effectFilter: string
) => {
  if (
    getIngredientNames(ingredients)
      .map((name) => name.toLowerCase())
      .includes(ingredientFilter.toLowerCase())
  ) {
    return `Effects of ${ingredientFilter}`;
  }
  if (
    getEffectNames(ingredients)
      .map((name) => name.toLowerCase())
      .includes(effectFilter.toLowerCase())
  ) {
    return `Ingredients with ${effectFilter}`;
  }
  return "Search for an ingredient or an effect";
};

const getList = (
  ingredients: Ingredient[],
  ingredientFilter: string,
  effectFilter: string
) => {
  if (
    getIngredientNames(ingredients)
      .map((name) => name.toLowerCase())
      .includes(ingredientFilter.toLowerCase())
  ) {
    return (
      ingredients.find(({ name }) => name === ingredientFilter)?.effects || []
    );
  }
  if (
    getEffectNames(ingredients)
      .map((name) => name.toLowerCase())
      .includes(effectFilter.toLowerCase())
  ) {
    return ingredients.map(({ name }) => name);
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
  const ingredients = useIngredients();
  const titleString = getTitleString(
    ingredients,
    ingredientFilter,
    effectFilter
  );
  const displayStrings = getList(ingredients, ingredientFilter, effectFilter);
  return (
    <div className={styles.wrapper}>
      {titleString}
      <div className={styles.searchInfo}>
        {displayStrings.map((string) => (
          <div
            key={string}
            onClick={
              ingredientFilter
                ? () => setEffectFilter(string)
                : () => setIngredientFilter(string)
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
