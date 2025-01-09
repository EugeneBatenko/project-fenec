import {FC} from "react";
import styles from "./loading.module.css";
import LogoLoader from "@/public/logo-loader.svg";


export const Loading: FC = () => {
    return (
        <div className={styles.loaderContainer}>
            <LogoLoader className={styles.loader}/>
            <div className={styles.loadingLine}></div>
            {/*<h2 className={styles.title}>Loading...</h2>*/}
        </div>
    )
}
