import Link from "next/link";
import styles from "./index.module.css";

type LinkProps = {
    href: string;
    name: string;
}

export const LinkButton = (props: LinkProps) => {
    return(
        <Link className={styles.link} href={props.href}>
            {/*https://codepen.io/atechajay/pen/WNZpLMQ*/}
            <span className={styles.text}>{props.name}</span>
            <span className={`${styles.span} ${styles.first}`}></span>
            <span className={`${styles.span} ${styles.second}`}></span>
            <span className={`${styles.span} ${styles.third}`}></span>
            <span className={`${styles.span} ${styles.fourth}`}></span>
        </Link>
    )
}