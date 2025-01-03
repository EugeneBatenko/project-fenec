import styles from './headers.module.css';
import {FC} from "react";
import {SectionHeaderProps} from "@/types";

export const SectionHeader: FC<SectionHeaderProps> = (header) => {
    return (
        <h2 className={`${styles.sectionHeader} ${header.reversed ? styles.reversed : ""} ${header.addClassName || ''}`}>
            <span className={styles.text}>{header.title}</span>
        </h2>
    )
}
