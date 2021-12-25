import React, { ChangeEventHandler, FC } from "react";
import styles from "./Checkbox.module.css";

type Props = {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler;
};

const Radiobutton: FC<Props> = ({ label, checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
        list={label}
      />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Radiobutton;
