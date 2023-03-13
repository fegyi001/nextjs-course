import { FC, ReactNode } from "react";

import styles from "./error-alert.module.css";

const ErrorAlert: FC<{ children: ReactNode }> = (props) => {
  return <div className={styles.alert}>{props.children}</div>;
};

export default ErrorAlert;
