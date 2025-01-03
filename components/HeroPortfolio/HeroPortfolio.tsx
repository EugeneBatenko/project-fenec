import {FC} from "react";
import styles from "./hero-portfolio.module.css"
import PortfolioImg from "@/public/bg-projects.webp"
import Image from "next/image";

export const HeroPortfolio: FC = () => {
    return (
        <section className={styles.section}>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col text-center">
                        <h1 className={`${styles.title} header-line header-shadow`}>Portfolio</h1>

                        <span className={styles.shapes}></span>
                        <span className={styles.shapes}></span>

                        <Image
                            alt="Hero image"
                            src={PortfolioImg}
                            quality={100}
                            className={styles.background}
                            placeholder="blur"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}