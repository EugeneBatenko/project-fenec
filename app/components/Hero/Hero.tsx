import styles from "./hero.module.css";
import Image from "next/image";
import HeroImg from "@/public/bg-hero.webp";
import Logo from "@/public/logo.svg";

export const Hero = () => {
  return (
    <section className={`${styles.section} mb-5`}>
      <span className={styles.overlay}></span>
      <Image
        alt="Hero image"
        src={HeroImg}
        quality={100}
        fill
        placeholder="blur"
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
      />

      <div className="container d-flex align-items-center justify-content-center justify-content-lg-start z-3">
        <div className="row">
          <div className="col d-flex flex-column flex-lg-row align-items-center">
            <Logo fill={"#fff"} width={200} height={200} className={styles.logoEmblem} />
            <div className={styles.text}>
              <h1 className="logo">eugene</h1>
              <span>
                Full-stack <br className="d-none d-lg-block" /> developer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.indicator}>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
      </div>
    </section>
  );
};
