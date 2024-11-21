import { SectionHeader } from "@/ui/headers/SectionHeader";
import { MdAlternateEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaHeartBroken, FaGithub, FaCodepen, FaLinkedinIn } from "react-icons/fa";
import styles from './getInTouch.module.css';

import Link from "next/link";

export const GetInTouch = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <SectionHeader title={"Get In Touch"} reversed={true} addClassName={"ms-0 me-auto mb-5"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <p className="text-card">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of
                            your vision. Whether you have a specific project in mind or just want to connect, feel free
                            to reach out. Let&apos;s collaborate and bring your ideas to life! <br/><br/>

                            You can contact me via email or connect with me on social media. I&apos;ll get back to you as
                            soon as possible. Looking forward to hearing from you!
                        </p>
                    </div>

                    <div className="col-lg-4 col-12">
                        <h3 className="mb-3">Contact info</h3>
                        <p className="d-flex align-items-center"><MdAlternateEmail className="me-2" size={30} /><Link href="mailto:batenko.e.v@gmail.com">batenko.e.v@gmail.com</Link></p>
                        <p className="d-flex align-items-center mb-5"><ImLocation2 className="me-2" size={30} /> Ukraine <FaHeartBroken className="mx-1"/></p>

                        {/*https://codepen.io/Stockin/pen/bzdNOq*/}
                        <ul className={`${styles.list} m-auto mb-0`}>
                            <li className={styles.item}>
                                <Link className={styles.link} href="https://github.com/EugeneBatenko" target="_blank">
                                    <FaGithub className={styles.icon}/>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link} href="https://www.linkedin.com/in/eugene-batenko-west-lion/" target="_blank">
                                    <FaLinkedinIn className={styles.icon}/>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link} href="https://codepen.io/EugeneBatenko" target="_blank">
                                    <FaCodepen className={styles.icon}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}