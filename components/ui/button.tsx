import Link from "next/link";
import { ReactNode } from "react";

import styles from "./button.module.css";

export default function Button(props: { link: string; children: ReactNode }) {
  const { link, children } = props;
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}
