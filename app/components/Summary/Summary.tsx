import styles from "./summary.module.css";
import Image from "next/image";
import AboutImg from "@/public/bg-about.webp";

export const Summary = () => {
    return (
        <section className={`${styles.section} pt-5`}>
            <div className="container">
                <div className="row flex-md-row flex-column-reverse">
                    <div className="col z-2 py-5">
                        <h3 className="mb-3">Hi, I'm Eugene</h3>
                        <p>I am a skilled Full-Stack Developer from Ukraine. I am a dedicated and detail-oriented
                            developer with a strong foundation in designing, building, and optimizing web applications.
                            Skilled in both frontend and backend technologies, I specialize in creating efficient,
                            scalable, and user-centric solutions. With a passion for problem-solving and continuous
                            learning, I strive to stay ahead in the ever-evolving tech landscape and contribute to
                            impactful projects.</p>
                    </div>

                    <div className="col d-flex align-items-center justify-content-center">
                        <h1 className={`${styles.pageHeader} header-line header-shadow z-2`}>About me</h1>
                        <span className={styles.shapes}></span>
                        <span className={styles.shapes}></span>

                        <Image
                            alt="Hero image"
                            src={AboutImg}
                            quality={100}
                            className={styles.background}
                            placeholder="blur"
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
