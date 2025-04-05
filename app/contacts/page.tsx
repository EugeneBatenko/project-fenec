import {MdOutlineAlternateEmail} from "react-icons/md";
import {FaInfoCircle, FaLinkedinIn, FaMinus, FaPlus} from "react-icons/fa";
import {RiTimeZoneFill} from "react-icons/ri";

import Link from "next/link";
import {Accordion, AccordionContent, AccordionToggle} from "@/ui/accordion/Accordion";
import styles from "./contacts.module.css";

export default function Page() {
    const uaTimeFormatter = new Intl.DateTimeFormat('uk-UA', {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        // hour12: false,
        timeZone: 'Europe/Kyiv'
    });

// For user's system time format
    const userTimeFormatter = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        // hour12: false
    });

    const now = new Date();

    return (
        <section className="container my-5">
            <div className="row mt-5 mb-3">
                <div className="col">
                    <div className="bg-section text-center">
                        <h1 className="header-line text-center py-5">Contact</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <MdOutlineAlternateEmail className="svg-color mb-3" size={50}/>
                        <Link className="link" href="mailto:batenko.e.v@gmail.com">batenko.e.v@gmail.com</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <FaInfoCircle className="svg-color mb-3" size={50}/>
                        <p>I am usually available in these hours <br/> 10:00-19:00 (10am - 7pm) in my timezone</p>
                        <p>If I am not answered please write me again</p>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <FaLinkedinIn className="svg-color mb-3" size={50}/>
                        <Link className="link" href="https://www.linkedin.com/in/eugene-batenko-west-lion/"
                              target="_blank">Linkedin</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <RiTimeZoneFill className="svg-color mb-3" size={50}/>
                        <p>My time (Kyiv): {uaTimeFormatter.format(now)}</p>
                        <p>Your local time: {userTimeFormatter.format(now)}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <h2 className="text-center header-line my-4">FAQ</h2>
                <div className="col">
                    <Accordion id={1} className={styles.accordion}>
                        <h5 className="mx-4 ">What is the best way to contact you?</h5>
                        <AccordionToggle id={1} className={styles.toggle} open={<FaPlus/>} close={<FaMinus/>}/>
                    </Accordion>
                    <AccordionContent id={1} className={styles.content}>
                        <p className="px-4 py-2 m-0">Feel free to write me an email or contact me on LinkedIn.</p>
                    </AccordionContent>

                    <Accordion id={2} className={styles.accordion}>
                        <h5 className="mx-4 ">What is your notice period?</h5>
                        <AccordionToggle id={2} className={styles.toggle} open={<FaPlus/>} close={<FaMinus/>}/>
                    </Accordion>
                    <AccordionContent id={2} className={styles.content}>
                        <p className="px-4 py-2 m-0">1-2 weeks. Depends on what need to finish before I go</p>
                    </AccordionContent>

                    <Accordion id={3} className={styles.accordion}>
                        <h5 className="mx-4 ">What is your English level</h5>
                        <AccordionToggle id={3} className={styles.toggle} open={<FaPlus/>} close={<FaMinus/>}/>
                    </Accordion>
                    <AccordionContent id={3} className={styles.content}>
                        <p className="px-4 py-2 m-0">B2. I have complete B1 level on the courses and can show
                            certificates (see in CV). But in fact I have higher level. 90% of projects was with foreign
                            client with direct communication</p>
                    </AccordionContent>

                    <Accordion id={4} className={styles.accordion}>
                        <h5 className="mx-4 ">What is your red flags?</h5>
                        <AccordionToggle id={4} className={styles.toggle} open={<FaPlus/>} close={<FaMinus/>}/>
                    </Accordion>
                    <AccordionContent id={4} className={styles.content}>
                        <p className="px-4 py-2 m-0">
                            - Time tracker in any form; (if you do not trust your employee there is no reason to trust you)<br/>
                            - Micromanagement;<br/>
                            - Technical questions on the HR screening;<br/>
                            - Too much turnovers;<br/>
                            - Hurry in development and overtimes as consequences;<br/>
                            - Gambling and adult domain;<br/>
                            - Working with russians in your company no matter if they left their country or no;<br/>
                            - Demands to speak on russian language;<br/>
                            - Inappropriate language;<br/>
                            - Distributing out of work (only in emergencies cases);<br/>
                            - Overtime without extra payment not because of my mistakes;<br/>
                            - Camera off during interview with no reason;<br/>
                        </p>
                    </AccordionContent>
                </div>
            </div>
        </section>
    );
}
