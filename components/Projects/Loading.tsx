import {FC, ReactNode} from "react";
import styles from "./loading.module.css";
import Placeholder from "@/public/placeholder-fennec-fox.svg";

export const ProjectsLoading: FC = () => {
    return(
        <article className={styles.body}>
            {[...Array(4)].map((_: ReactNode, index: number) => (
                <div key={index} className={styles.card}>
                    <Placeholder fill="#1a1a1a" className={styles.image}/>

                    <div className={styles.content}>
                        <h3 className={`${styles.title} h3 mb-2`}></h3>

                        <h6 className={`${styles.period} h6 mb-2`}></h6>

                        <div className={styles.types}>
                            <span className={styles.type}></span>
                            <span className={styles.type}></span>
                            <span className={styles.type}></span>
                        </div>

                        <p className={styles.text}></p>
                        <p className={styles.text}></p>
                        <p className={styles.text}></p>
                    </div>
                </div>
            ))}
        </article>
    )
}