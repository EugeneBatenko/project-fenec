import Link from "next/link";
import styles from "./buttons.module.css";
import {FC} from "react";

type LinkProps = {
    href: string;
    name: string;
}

export const LinkButton: FC<LinkProps> = (link) => {
    return(
        <Link className={styles.link} href={link.href}>
            {/*https://codepen.io/atechajay/pen/WNZpLMQ*/}
            <span className={styles.text}>{link.name}</span>
            <span className={`${styles.span} ${styles.first}`}></span>
            <span className={`${styles.span} ${styles.second}`}></span>
            <span className={`${styles.span} ${styles.third}`}></span>
            <span className={`${styles.span} ${styles.fourth}`}></span>
        </Link>
    )
}