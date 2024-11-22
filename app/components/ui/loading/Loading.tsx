import {FC} from "react";
import styles from "./loading.module.css";


export const Loading: FC = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Loading...</p>
        </div>
    )
}
