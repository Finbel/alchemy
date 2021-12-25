import { ChangeEventHandler, FC } from "react";
import useWindowSize from "../../utils/useWindowSize";
import styles from "./Input.module.css";

type Props = {
  label: string;
  value: string;
  onChange: ChangeEventHandler;
  suggestions?: string[];
};

export const Input: FC<Props> = ({ label, value, onChange, suggestions }) => {
  const size = useWindowSize();
  const filteredSuggestions = suggestions
    ?.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    )
    .slice(0, size.width && size.width > 500 ? 10 : 5);
  return (
    <div className={styles.wrapper}>
      <div>{label}: </div>
      <input
        spellCheck="false"
        value={value}
        onChange={onChange}
        className={styles.input}
        list={label}
      />
      {!!(filteredSuggestions?.length && filteredSuggestions[0] !== value) && (
        <datalist id={label}>
          {filteredSuggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
      )}
    </div>
  );
};
