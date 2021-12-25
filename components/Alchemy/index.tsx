import IngredientsTable from "../IngredientsTable";
import Filter from "../Filter";
import SearchInfo from "../SearchInfo";
import useWindowSize from "../../utils/useWindowSize";
import styles from "./Alchemy.module.css";

export const Alchemy = () => {
  const size = useWindowSize();
  return (
    <>
      <Filter />
      <div className={styles.content}>
        {size.width && size.width > 500 ? <IngredientsTable /> : <SearchInfo />}
      </div>
    </>
  );
};
