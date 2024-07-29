import styles from './index.module.css';
import Image from "next/image";
import HeroImg from "@/public/bg-hero.webp";
import Logo from "@/public/logo.svg";


export const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <span className={styles.heroOverlay}></span>
            <Image
                alt="Hero image"
                src={HeroImg}
                quality={100}
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "top",
                }}
            />

            <div className="container d-flex align-items-center z-3">
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <Logo fill={"#fff"} width={200} height={200} />
                        <div className={styles.heroText}>
                            <h1 className="logo">eugene</h1>
                            <span>Full-stack <br/> developer</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}