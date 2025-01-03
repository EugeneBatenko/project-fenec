import {FC} from "react";
import styles from "./buttons.module.css";
import Link from "next/link";
import {ButtonProps} from "@/types";

export const HighlightedButton: FC<ButtonProps> = (button) => {
    return (
        <Link href={button.href} className={styles.highlighted} style={{width: button.width, height: button.height}}>
            {button.name}
        </Link>
    )
}
