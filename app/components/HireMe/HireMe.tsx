import {FC} from "react";
import styles from "./hire.module.css";
import {HighlightedButton} from "@/ui/buttons/HighlightedButton";

export const HireMe: FC = () => {
    return (
        <section className={styles.section}>
            <span className={styles.chevron}></span>
            <span className={styles.triangle}></span>
            <span className={styles.square}></span>

            {/*z-index and position to overlay shapes*/}
            <div className="container py-4 position-relative z-2 text-center text-md-start">
                <div className="row">
                    <div className="col-lg-7 col-md-10 col-12 mb-lg-0 mb-4">
                        <h3 className="mb-3 ">Are you still interested?</h3>
                        <p>Looking for a dedicated and skilled Full-Stack Developer to bring your ideas to life? Let’s
                            collaborate to create high-quality, efficient, and user-friendly web solutions tailored to
                            your needs!</p>
                    </div>
                    <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center mb-lg-0 mb-4">
                        <HighlightedButton href={"/contacts"} name={"Hire Me"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}