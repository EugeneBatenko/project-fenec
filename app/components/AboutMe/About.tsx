import styles from "./about.module.css";
import {Tab, Tabs} from "@/ui/tabs/Tabs";
import SkillsPipe from "@/ui/skills/SkillsPipe";

import {SectionHeader} from "@/ui/headers/SectionHeader";
import {getYears} from "@/app/components/utils/dateHooks";


export const AboutMe = () => {
    const tabsClasses = {
        tabs: styles.tabs,
        panel: styles.panel,
        content: styles.content,
    }

    return (
        <section className="mb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <SectionHeader title="About me"/>

                        <p className="text-card my-4">
                            Hi, I am Eugene. As a passionate Full-Stack Developer, I
                            specialize in building dynamic, high-performance web applications.
                            With expertise in both frontend and backend technologies, I excel
                            at creating seamless user experiences and robust server-side
                            functionality.
                        </p>
                    </div>

                    <div className="col-md-6 col-12 mb-5">
                        <div className="d-flex justify-content-around">
                            <div className="d-flex">
                                <h3 className="text-color-primary fs-1 me-2">{getYears('2019-10-20')}+</h3>
                                <p>Years of <br/>experience</p>
                            </div>
                            <div className="d-flex">
                                <h3 className="text-color-primary fs-1 me-2">20+</h3>
                                <p>Complete <br/>projects</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col">
                        <SectionHeader title="Skills" reversed={true} addClassName="mb-5"/>

                        {/*Geometric figures from here https://css-shape.com/*/}
                        <Tabs classNames={tabsClasses}>
                            <Tab label="FrontEnd" classNameTab={styles.tab}>
                                <h3 className={`${styles.titleAnimated} mb-2 text-center`}>Front-end development</h3>
                                <div className={`${styles.tabText} text-card mb-3`} data-icon="&#xf41b;">
                                    <p className={styles.textAnimated}>Proficient in building dynamic, responsive, and highly
                                        interactive web applications
                                        using React.js and Next.js. Experienced in component-based architecture, utilizing
                                        hooks and state management libraries like Redux and Zustand to manage complex state
                                        efficiently. Skilled in optimizing performance, implementing SSR (Server-Side
                                        Rendering) and ISR (Incremental Static Regeneration) for fast and SEO-friendly
                                        applications with Next.js. Familiar with modern frontend tools like Webpack, Babel,
                                        and ESLint for efficient development workflows. Strong knowledge of TypeScript,
                                        ensuring type safety and maintainable codebases.
                                    </p>
                                </div>
                                <SkillsPipe additionalClassName="d-lg-flex d-none" skillSet="frontend"/>
                            </Tab>

                            <Tab label="BackEnd" classNameTab={styles.tab}>
                                <h3 className={`${styles.titleAnimated} mb-2 text-center`}>Back-end development</h3>
                                <div className={`${styles.tabText} text-card mb-3`} data-icon="&#xf3d3;">
                                    <p className={styles.textAnimated}>Experienced in designing and implementing scalable and
                                        high-performance backend services with Node.js, Express.js, Nest.js and others.
                                        Proficient in building RESTful APIs and GraphQL APIs, with a deep understanding of
                                        handling asynchronous operations using Promises, async/await, and other patterns.
                                        Well-versed in working with databases like MongoDB, PostgreSQL, and MySQL, using
                                        ORMs (e.g., TypeORM or Sequelize) for efficient data modeling and querying. Focused
                                        on ensuring security through authentication/authorization mechanisms (JWT, OAuth),
                                        input validation, and secure coding practices.</p>
                                </div>
                                <SkillsPipe additionalClassName="d-lg-flex d-none" skillSet="backend"/>
                            </Tab>

                            <Tab label="DevOps" classNameTab={styles.tab}>
                                <h3 className={`${styles.titleAnimated} mb-2 text-center`}>Dev Ops</h3>
                                <div className={`${styles.tabText} text-card mb-3`} data-icon="&#xf17c;">
                                    <p className={styles.textAnimated}>Hands-on experience with setting up CI/CD pipelines to automate
                                        testing, building,
                                        and deployment processes using tools like GitLab CI or GitHub Actions. Proficient in
                                        using Docker for containerization and orchestrating microservices. Comfortable
                                        working with cloud platforms like AWS or Google Cloud for hosting, scaling, and
                                        maintaining web applications.</p>
                                </div>
                                <SkillsPipe additionalClassName="d-lg-flex d-none" skillSet="devops"/>
                            </Tab>

                            <Tab label="Other" classNameTab={styles.tab}>
                                <h3 className={`${styles.titleAnimated} mb-2 text-center`}>Other skills</h3>
                                <div className={`${styles.tabText} text-card mb-3`} data-icon="&#xf7bb;">
                                    <p className={styles.textAnimated}>In addition to proficiency in JavaScript and TypeScript, I have
                                        foundational knowledge of several other programming languages such as C++, Python,
                                        Ruby, and Golang. My experience includes writing basic algorithms, scripts, and
                                        small applications in these languages, which has expanded my understanding of
                                        different programming paradigms and enhanced my adaptability when working with
                                        diverse codebases.<br/>
                                        Also I have some experience in IoT with Raspberry PI, AI API&apos;s like OpenAI API and
                                        different tools like Postman, Mongo Compass, MySQL Workbench etc.
                                    </p>
                                </div>
                                <SkillsPipe additionalClassName="d-lg-flex d-none" skillSet="other"/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};
