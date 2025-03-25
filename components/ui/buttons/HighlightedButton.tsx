import {FC} from "react";
import styles from "./buttons.module.css";
import Link from "next/link";
import {ButtonLinkProps} from "@/types";

export const HighlightedButton: FC<ButtonLinkProps> = (button) => {
    return (
        <Link href={button.href} className={styles.highlighted} style={{width: button.width, height: button.height}}>
            {button.name}
        </Link>
    )
}
