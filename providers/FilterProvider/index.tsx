import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface PlantableFilter {
  plantable: boolean;
  setPlantable: Dispatch<SetStateAction<boolean>>;
}

interface FishableFilter {
  fishable: boolean;
  setFishable: Dispatch<SetStateAction<boolean>>;
}

interface IngredientFilter {
  ingredientFilter: string;
  setIngredientFilter: Dispatch<SetStateAction<string>>;
}

interface EffectFilter {
  effectFilter: string;
  setEffectFilter: Dispatch<SetStateAction<string>>;
}

export interface Filter
  extends PlantableFilter,
    FishableFilter,
    IngredientFilter,
    EffectFilter {}

export const FilterContext = React.createContext<Filter | null>(null);

export const usePlantable = (): PlantableFilter => {
  const context = React.useContext(FilterContext);
  if (!context) {
    throw new Error("usePlantable must be inside the FilterProvider");
  }
  const { plantable, setPlantable } = context;
  return {
    plantable,
    setPlantable,
  };
};

export const useFishable = (): FishableFilter => {
  const context = React.useContext(FilterContext);
  if (!context) {
    throw new Error("useFishable must be inside the FilterProvider");
  }
  const { fishable, setFishable } = context;
  return {
    fishable,
    setFishable,
  };
};

export const useIngredientFilter = (): IngredientFilter => {
  const context = React.useContext(FilterContext);
  if (!context) {
    throw new Error("useFishable must be inside the FilterProvider");
  }
  const { ingredientFilter, setIngredientFilter } = context;
  return {
    ingredientFilter,
    setIngredientFilter,
  };
};

export const useEffectFilter = (): EffectFilter => {
  const context = React.useContext(FilterContext);
  if (!context) {
    throw new Error("useFishable must be inside the FilterProvider");
  }
  const { effectFilter, setEffectFilter } = context;
  return {
    effectFilter,
    setEffectFilter,
  };
};

const FilterProvider: FC = ({ children }) => {
  const [plantable, setPlantable] = useState(false);
  const [fishable, setFishable] = useState(false);
  const [ingredientFilter, setIngredientFilter] = useState("");
  const [effectFilter, setEffectFilter] = useState("");

  useEffect(() => {
    if (effectFilter.length && ingredientFilter.length) {
      setIngredientFilter("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectFilter]);

  useEffect(() => {
    if (effectFilter.length && ingredientFilter.length) {
      setEffectFilter("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredientFilter]);

  useEffect(() => {
    if (plantable && fishable) {
      setFishable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantable]);

  useEffect(() => {
    if (plantable && fishable) {
      setPlantable(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fishable]);

  return (
    <FilterContext.Provider
      value={{
        plantable,
        setPlantable,
        fishable,
        setFishable,
        ingredientFilter,
        setIngredientFilter,
        effectFilter,
        setEffectFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
