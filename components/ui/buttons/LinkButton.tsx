import Link from "next/link";
import styles from "./buttons.module.css";
import {FC} from "react";
import {ButtonLinkProps} from "@/types";

export const LinkButton: FC<ButtonLinkProps> = (button) => {
    return(
        <Link className={styles.link} href={button.href} style={{width: button.width, height: button.height}}>
            {/*https://codepen.io/atechajay/pen/WNZpLMQ*/}
            <span className={styles.text}>{button.name}</span>
            <span className={`${styles.span} ${styles.first}`}></span>
            <span className={`${styles.span} ${styles.second}`}></span>
            <span className={`${styles.span} ${styles.third}`}></span>
            <span className={`${styles.span} ${styles.fourth}`}></span>
        </Link>
    )
}