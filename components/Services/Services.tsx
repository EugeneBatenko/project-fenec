import {FC} from "react";
import {SectionHeader} from "@/components/ui/headers/SectionHeader";
import styles from "./services.module.css";

export const Services: FC = () => {
    return (
        <section className={`${styles.section} mb-5`}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <SectionHeader title="Services"/>
                    </div>
                </div>

                <div className="row">
                    <div className={`${styles.column} col-md-6 col-12 mb-3`}>
                    <div className={styles.card}>
                            <h3 className={styles.title}>Design</h3>
                            <p className={styles.text}>I can create mobile design for websites based on desktop. Once I have been created design
                                from scratch landing page. I have experience with some graphic tools like Gimp to edit
                                vector and scalar images.</p>
                            <span className={styles.background}></span>
                        </div>
                    </div>

                    <div className={`${styles.column} col-md-6 col-12 mb-3`}>
                        <div className={styles.card}>
                            <h3 className={styles.title}>Web development</h3>
                            <p className={styles.text}>I can develop project on every stage. Configuration (containerization), client side,
                                server side, integration third services, deploy and post production support.</p>
                            <span className={styles.background}></span>
                        </div>
                    </div>

                    <div className={`${styles.column} col-md-6 col-12 mb-3`}>
                        <div className={styles.card}>
                            <h3 className={styles.title}>Support</h3>
                            <p className={styles.text}>I have huge experience with project support after my work or someone else. Also I have
                                some experience with legacy project: adding new feature, updating dependencies to newer
                                version, migrating databases</p>
                            <span className={styles.background}></span>
                        </div>
                    </div>

                    <div className={`${styles.column} col-md-6 col-12 mb-3`}>
                        <div className={styles.card}>
                            <h3 className={styles.title}>Other</h3>
                            <p className={styles.text}>I have some skills and knowledge of other programming languages like C++, C#, Python,
                                Ruby, Golang. My general experience allow me to handle with some basic things and
                                understand work of app which written on it</p>
                            <span className={styles.background}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
