import { FC } from "react";
import CrossIcon from "../CrossIcon";
import styles from "./Sidebar.module.css";

type Props = {
  open: boolean;
  close: () => void;
};

export const Sidebar: FC<Props> = ({ open, close, children }) => {
  return (
    <div className={open ? styles.open : styles.closed}>
      <div style={{ position: "relative" }}>
        <div className={styles.closeButton} onClick={close}>
          <CrossIcon />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
