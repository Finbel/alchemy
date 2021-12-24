import React, { FC } from "react";
import useWindowSize from "../../utils/useWindowSize";
import styles from "./Sidebar.module.css";

type Props = {
  open: boolean;
  close: () => void;
};

export const Sidebar: FC<Props> = ({ open, close }) => {
  const size = useWindowSize();
  const isDesktop = size.width && size.width > 500;

  const openClass = isDesktop ? styles.desktopOpen : styles.mobileOpen;

  return (
    <div className={open ? openClass : styles.closed}>
      <div style={{ position: "relative" }}>
        <div className={styles.closeButton} onClick={close}>
          close
        </div>
      </div>
    </div>
  );
};
