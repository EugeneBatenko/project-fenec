"use client"

import {CSSProperties, FC} from "react";
import {SectionHeader} from "@/ui/headers/SectionHeader";
import styles from "./experience.module.css";

import Ukietech from "@/public/logo-ukietech.svg";
import LetterF from "@/public/letter-f.svg";
import Codexy from "@/public/logo-codexy.svg";
import Soloway from "@/public/logo-soloway.svg"
import Question from "@/public/question.svg";
import Link from "next/link";
import articleData from "./experience.data.json"
import {Accordion, AccordionContent, AccordionToggle} from "@/ui/accordion/Accordion";

export const Experience: FC = () => {
    return (
        <section className={`${styles.section} mb-5`}>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <SectionHeader title="Experience" reversed={true} addClassName="mb-5"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Accordion id={1}>

                            <div className={styles.item} style={{"--hover-color": "#ff503f"} as CSSProperties}>
                                <div className={styles.title}>
                                    <h3 className="h3">Intern</h3>
                                    <Link href="https://ukietech.com/" target="_blank">
                                        <h6 className="link h6">Ukietech</h6>
                                    </Link>

                                    <AccordionToggle id={1} className={styles.button}/>
                                </div>

                                <span className={styles.emblem}>
                                    <Ukietech fill={"#1a1a1a"}/>
                                </span>

                                <div className={styles.description}>
                                    <p className="mb-0">2018</p>
                                    <p>Practise in company to achieve new skills and knowledge in HTML/CSS/JS. As a
                                        result I
                                        complete landing page <Link className="link" target="_blank"
                                                                    href="https://github.com/EugeneBatenko/ukietech-practice.github.io">Result</Link>
                                    </p>
                                </div>

                            </div>

                            <AccordionContent id={1} className={styles.article}>
                                <p>{articleData.article1}</p>
                            </AccordionContent>

                        </Accordion>

                        <Accordion id={2}>
                            <div className={styles.item} style={{"--hover-color": "#fff"} as CSSProperties}>
                                <div className={styles.title}>
                                    <h3 className="h3 d-none d-lg-block">Front-End Developer</h3>
                                    <h3 className="h3 d-lg-none">FE Dev</h3>
                                    <h6 className="h6">Freelance</h6>
                                    <AccordionToggle id={2} className={styles.button}/>
                                </div>

                                <span className={styles.emblem}>
                                <LetterF fill={"#1a1a1a"}/>
                            </span>

                                <div className={styles.description}>
                                    <p className="mb-0">2018</p>
                                    <p>It was short term project approximately for 3 months. I was responsible for PSD
                                        to
                                        HTML work.</p>
                                </div>
                            </div>

                            <AccordionContent id={2} className={styles.article}>
                                <p>{articleData.article2}</p>
                            </AccordionContent>

                        </Accordion>

                        <Accordion id={3}>

                            <div className={styles.item} style={{"--hover-color": "#5d0091"} as CSSProperties}>
                                <div className={styles.title}>
                                    <h3 className="h3 d-none d-lg-block">Front-End Developer</h3>
                                    <h3 className="h3 d-lg-none">FE Dev</h3>
                                    <Link href="https://codexysoft.com/" target="_blank">
                                        <h6 className="link h6 d-none d-lg-block">Codexy Software</h6>
                                        <h6 className="link h6 d-lg-none">Codexy Soft</h6>
                                    </Link>
                                    <AccordionToggle id={3} className={styles.button}/>
                                </div>

                                <span className={styles.emblem}>
                                <Codexy fill={"#1a1a1a"}/>
                            </span>

                                <div className={styles.description}>
                                    <p className="mb-0">2019 - 2021</p>
                                    <p>First commercial experience as front-end developer. I used to work with
                                        Wordpress,
                                        Ruby-on-Rails, React.js and PSD to HTML projects.</p>
                                </div>
                            </div>

                            <AccordionContent id={3} className={styles.article}>
                                <p>{articleData.article3}</p>
                            </AccordionContent>

                        </Accordion>

                        <Accordion id={4}>

                            <div className={styles.item} style={{"--hover-color": "#d06ab5"} as CSSProperties}>
                                <div className={styles.title}>
                                    <h3 className="h3 d-none d-lg-block">Full-Stack Developer</h3>
                                    <h3 className="h3 d-lg-none">FS Dev</h3>
                                    <Link href="https://soloway.tech/" target="_blank">
                                        <h6 className="link h6 d-none d-lg-block">Soloway Technologies</h6>
                                        <h6 className="link h6 d-lg-none">Soloway Tech</h6>
                                    </Link>
                                    <AccordionToggle id={4} className={styles.button}/>
                                </div>

                                <span className={styles.emblem}>
                                <Soloway fill={"#1a1a1a"}/>
                            </span>

                                <div className={styles.description}>
                                    <p className="mb-0">2021 - present</p>
                                    <p>First commercial experience as Full-Stack developer with back-end direction. Main
                                        stack Node.js with React.js (mostly).</p>
                                </div>
                            </div>

                            <AccordionContent id={4} className={styles.article}>
                                <p>{articleData.article4}</p>
                            </AccordionContent>

                        </Accordion>

                        <div className={styles.item} style={{"--hover-color": "#fff"} as CSSProperties}>
                            <div className={styles.title}>
                                <h3 className="h3 d-none d-lg-block">Developer/Manager/Lead</h3>
                                <h3 className="h3 d-lg-none">Dev/Lead</h3>
                                <h6 className="h6">Your company might be next</h6>
                            </div>

                            <span className={styles.emblem}>
                                <Question fill={"#1a1a1a"}/>
                            </span>

                            <div className={styles.description}>
                                <p className="mb-0">Future</p>
                                <p>I am always open to the new opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
