import {FC} from "react";
import {FaNodeJs, FaReact} from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { SiRubyonrails } from "react-icons/si";
import styles from './projects.module.css';

import Image from "next/image";
import LibraryImg from '@/public/projects/library.webp';
import FennecImg from '@/public/projects/fennec.webp';
import GameImg from '@/public/projects/gaming.webp';
import {LinkButton} from "@/ui/buttons/LinkButton";

export const Projects: FC = () => {
    return (
        <section className="mb-5 bg-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="h2 text-center mb-5 header-line">Projects</h2>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        {/*https://littlesnippets.net/snip1364*/}
                        <figure className={styles.figure}>
                            <Image
                                src={LibraryImg}
                                className={styles.img}
                                alt="library"
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                            <figcaption className={styles.figcaption}>
                                <h3 className={styles.title}>NDA</h3>
                                <p className={styles.text}>SaaS platform for library with barcode scanner. Based on Ruby-on-Rails</p>
                            </figcaption>
                            <SiRubyonrails size={50} className={styles.icon}/>
                        </figure>
                    </div>

                    <div className="col-lg-4 col-12 order-1 order-lg-0">
                        {/*https://littlesnippets.net/snip1288*/}
                        <figure className={`${styles.figure} ${styles.central}`}>
                            <Image
                                src={FennecImg}
                                className={styles.img}
                                alt="library"
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                            <figcaption className={styles.figcaption}>
                                <h3 className={styles.title}>This Website</h3>
                                <p className={styles.text}>Yeah! Why not :)</p>
                            </figcaption>
                            <FaReact size={50} className={styles.icon}/>
                            <RiNextjsLine size={50} className={styles.icon}/>
                        </figure>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        {/*https://littlesnippets.net/snip1401*/}
                        <figure className={`${styles.figure} ${styles.reversed}`}>
                            <Image
                                src={GameImg}
                                className={styles.img}
                                alt="library"
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                            <figcaption className={styles.figcaption}>
                                <h3 className={styles.title}>NDA</h3>
                                <p className={styles.text}>CS:GO matchmaking system based on AWS infrastructure (EC2,
                                    Lambdas)</p>
                            </figcaption>
                            <FaNodeJs size={50} className={styles.icon}/>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <LinkButton href="/projects" name="Learn More"/>
                    </div>
                </div>
            </div>

        </section>
    )
}