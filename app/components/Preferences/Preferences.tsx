import {FC} from "react";
import {SectionHeader} from "@/ui/headers/SectionHeader";
import styles from "./preferences.module.css";

export const Preferences: FC = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <SectionHeader title="Preferences" addClassName="mb-5"/>
                    </div>
                </div>
                <div className={`${styles.cardRow} row`}>
                    <div className="col-lg-4 col-12 mb-lg-0 mb-4">
                        <div className={styles.card}>
                            <h3 className={`h3 ${styles.title}`}>Modern Technologies</h3>
                            <p className={styles.text}>I value staying at the forefront of technology, utilizing modern tools and frameworks to
                                deliver efficient, clean, and scalable solutions. Continuous learning and applying
                                innovative approaches help me keep projects up-to-date and future-ready.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 mb-lg-0 mb-4">
                        <div className={styles.card}>
                            <h3 className={`h3 ${styles.title}`}>Effective Solutions</h3>
                            <p className={styles.text}>Simplicity is key. I focus on creating solutions that are straightforward, maintainable,
                                and easy to use. Balancing clean code with real-world requirements ensures that projects
                                are delivered effectively without unnecessary complexity.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 mb-lg-0 mb-4">
                        <div className={styles.card}>
                            <h3 className={`h3 ${styles.title}`}>Steady Approach</h3>
                            <p className={styles.text}>Quality takes time. I believe in delivering polished, reliable work through a measured
                                approach, avoiding unnecessary rush. Prioritizing attention to detail ensures
                                sustainable and long-term results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
