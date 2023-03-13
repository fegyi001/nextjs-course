import Link from "next/link";
import { ReactNode } from "react";

import styles from "./button.module.css";

export default function Button(props: {
  link?: string;
  children: ReactNode;
  onClick?: any;
}) {
  const { link, children, onClick } = props;
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
