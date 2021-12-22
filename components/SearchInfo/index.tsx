import { FC } from "react";
import { Ingredient } from "../../pages/api/ingredients";
import getEffectNames from "../../utils/getEffectNames";
import styles from "./SearchInfo.module.css";

type Props = {
  ingredients: Ingredient[];
  effectFilter: string;
};

const SearchInfo: FC<Props> = ({ ingredients, effectFilter }) => {
  const titleString =
    ingredients.length === 1
      ? `Effects of ${ingredients[0].name}`
      : getEffectNames().includes(effectFilter)
      ? `Ingredients with ${effectFilter}`
      : "Search for an ingredient or an effect";
  const displayStrings =
    ingredients.length === 1
      ? ingredients[0].effects
      : getEffectNames().includes(effectFilter)
      ? ingredients.map(({ name }) => name)
      : [];
  return (
    <div className={styles.wrapper}>
      {titleString}
      <div className={styles.searchInfo}>
        {displayStrings.map((string) => (
          <div key={string}>{string}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchInfo;
