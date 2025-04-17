import {FC} from "react";
import {FormProps} from "@/types";
import styles from "./form.module.css"

export const Form: FC<FormProps> = ({children, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            {children}
        </form>
    )
}
