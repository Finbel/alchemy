import { FC, MouseEventHandler } from "react";
import styles from "./Cell.module.css";

type Props = {
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  value: string;
  className: string;
};

const EffectCell: FC<Props> = ({
  onMouseEnter,
  onMouseLeave,
  value,
  className,
}) => {
  return (
    <td
      title={value}
      className={`${className} ${styles.cell}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {value}
    </td>
  );
};

export default EffectCell;
