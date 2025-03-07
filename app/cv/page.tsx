import Link from "next/link";
import styles from './cv.module.css'

export default function Page() {
    return (
        <section className={`${styles.cvPage} bg-section mb-5`}>
            <div className="container-fluid bg-section-darker">
                <div className="row">
                    <div className="col text-center p-5">
                        <h1 className="mb-2">Resume</h1>
                        <h2 className="mb-1">Full-stack dev. (React.js/Node.js)</h2>
                        <h4>Yevhen Batenko</h4>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <div className="row mb-3">
                    <div className="col">
                        <h2>Contacts</h2>
                        <hr/>
                        <p>E-mail: <Link className="link" href="mailto:batenko.e.v@gmail.com">batenko.e.v@gmail.com</Link></p>
                        <p>Website(under development): <Link className="link" href="https://project-fenec-git-main-eugenes-projects-69a9632c.vercel.app/">Link</Link></p>
                        <p>LinkedIn: <Link className="link" href="https://www.linkedin.com/in/eugene-batenko-west-lion">Link</Link></p>
                        <p>GitHub: <Link className="link" href="https://github.com/EugeneBatenko">Link</Link></p>
                        <p className="fw-bold">Location: Ivano-Frankivsk, Ukraine</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2>Summary</h2>
                        <hr/>
                        <p>A motivated full-stack developer. I have more than 5 years of experience in web development. I have commercial experience in WordPress, Ruby Rails, react, and node.js projects. I&#39;m ready to learn new technologies and tools quickly if I need to know something. I am quite experienced in most projects. And have enough skills for legacy and projects using the latest technologies. My main stack is a MERN (MongoDB, Express.js, React, Node.js). Sometimes In my free time, I like creating some Vanilla JS decisions in Codepen as an alternative to JQuery. </p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <h2>Experience</h2>
                        <hr/>
                        <h4 className="fw-bold fst-italic mb-2">Commercial:</h4>
                        <ul className="ul mb-2">
                            <li className="li">
                                <p className="fw-bold">Full-Stack (React,Node.js) developer, SoloWay(bvblogic)</p>
                                <p><span className="fw-bold">Location:</span> Ukraine, Ivano-Frankivsk</p>
                                <p><span className="fw-bold">Period:</span> from October 2021 to present</p>
                                <p><span className="fw-bold">Short description:</span> I started as a Full-Stack developer in this company. I worked on projects involving Amazon services, CRM systems, retargeting platforms, and more. I also gained extensive experience with Node.js, React.js, and TypeScript. Most of my projects were Full-Stack, with an emphasis on the backend.</p>
                                <p><span className="fw-bold">Some projects:</span> <Link className="link" href="https://stylesearch.com">Stylesearch</Link>, CS:GO matchmaking platform(EC2, AWS Lambdas, backend only)</p>
                            </li>
                            <li className="li">
                                <p className="fw-bold">Front-end developer, Codexy Software</p>
                                <p><span className="fw-bold">Location:</span> Ukraine, Ivano-Frankivsk</p>
                                <p><span className="fw-bold">Period:</span> from October 2019 to October 2021</p>
                                <p><span className="fw-bold">Short description:</span> In this company, I have experience in front-end development in Ruby on Rails(also React.js with Rails webpacker), WordPress projects, and React.js projects.</p>
                                <p><span className="fw-bold">Some projects:</span> <Link className="link" href="https://robo-spine.com/">Robotic Spine Institute</Link>, <Link className="link" href="https://passco.com.ua/">PASS+CO</Link>, <Link className="link" href="https://encinovascular.com/">Encino</Link>, <Link className="link" href="https://timeauction.org/">TimeAuction</Link>, <Link className="link" href="https://www.norbauer.co/">Norbauer</Link></p>
                            </li>
                        </ul>

                        <h4 className="fw-bold fst-italic mb-2">Non-commercial:</h4>
                        <ul className="ul">
                            <li className="li">
                                <p><span className="fw-bold">I interned at Ukietech from July to August 2018.</span> During this period, I consolidated my previous skills and learned to create projects with architecture SMACSS.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <h2>Professional skills</h2>
                        <hr/>
                        <h5 className="fw-bold mb-2">Main skills:</h5>
                        <ul className="ul">
                            <li className="li">HTML (pug, slim, erb, ejs, hbs) and CSS (modules, JSS, styled-components, SCSS, Tailwind); </li>
                            <li className="li">Experience with SVG styling (editing code of SVG);</li>
                            <li className="li">Some experience animations (transitions, @keyframes, animate.css, ReactSpring, MotionFramer);</li>
                            <li className="li">Responsive design with Flexbox/Bootstrap 4-5/Grid/Material UI;</li>
                            <li className="li">JavaScript(Fetch API, ES5+, JQuery to JS);</li>
                            <li className="li">Basic knowledge of JQuery;</li>
                            <li className="li">Preprocessors SASS/SCSS;</li>
                            <li className="li">TypeScript;</li>
                            <li className="li">NodeJS(Express.js, Serverless, CRUD, API, JWT, Socket.io, Webpack, pm2);</li>
                            <li className="li">MySQL/PostgreSQL/MariaDB (TypeORM, Sequelize), MongoDB(Mongoose);</li>
                            <li className="li">AWS (Lambdas, S3);</li>
                        </ul>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <h5>Frameworks:</h5>
                        <ul className="ul">
                            <li className="li">Bootstrap 4-5;</li>
                            <li className="li">React.js(Hooks, Redax, Next.js, Zustand);</li>
                            <li className="li">Node.js(Express.js, Koa.js, Nest.js);</li>
                            <li className="li">Ruby-on-Rails (frontend, Hotwire);</li>
                            <li className="li">Socket.io (React/Express);</li>
                        </ul>
                        <h5>Tools:</h5>
                        <ul className="ul">
                            <li className="li">Git (GitHub, GitLab, Husky);</li>
                            <li className="li">Gulp/Webpack;</li>
                            <li className="li">Ngrok</li>
                            <li className="li">Yarn/NPM/PNPM</li>
                            <li className="li">Mongo Compass/Robo 3T</li>
                            <li className="li">Postman</li>
                            <li className="li">Docker</li>
                            <li className="li">AI (GPT, GitHub Copilot)</li>
                            <li className="li">pm2</li>
                            <li className="li">Algolia</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Graphic Tools:</h5>
                        <ul className="ul">
                            <li className="li">Avocode, Figma, AdobeXD</li>
                            <li className="li">Gimp, Krita, PaintNET</li>
                        </ul>
                        <h5>IDEs:</h5>
                        <ul className="ul">
                            <li className="li">WebStorm/PHPStorm/RubyMine</li>
                            <li className="li">Sublime Text</li>
                            <li className="li">VSCode/Visual Studio</li>
                        </ul>
                        <h5>Other backend:</h5>
                        <ul className="ul">
                            <li className="li">PHP (Wordpress)</li>
                            <li className="li">LAMP (Linux, Apache, MySQL, PHP)</li>
                            <li className="li">Raspberry Pi Server</li>
                        </ul>
                        <h5>APIs:</h5>
                        <ul className="ul">
                            <li className="li">Google (Maps, YouTube, Storage)</li>
                            <li className="li">Telegram (Bots)</li>
                            <li className="li">META (Facebook,Instagram)</li>
                            <li className="li">AppleID</li>
                            <li className="li">OpenAI</li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <h5>Other skills:</h5>
                        <ul className="ul">
                            <li className="li">
                                <p>Experience with Linux systems (Mint, Ubuntu, WSL) and some knowledge of terminal commands. Favorite distro is Kubuntu;</p>
                            </li>
                            <li className="li">
                                <p>Can code some basic things with C++, C# (Unity) and Python;</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <h2>Education:</h2>
                        <hr/>

                        <h5>Odesa National Polytechnic University</h5>
                        <p>Bachelor&#39;s degree (September 2015 – July 2019) – System engineering</p>
                        <p>At the university, I gained basic skills in university courses: programming, creating relative databases, circuitry, operation systems, and other subjects related to computer automatic systems.</p>
                        <Link className="link" href="https://drive.google.com/file/d/1RplceLQ-rVvu5ED5ot8B9lOUmmwIqPiv/view?usp=sharing">Diploma</Link><br/>

                        <br/>

                        <h5>Other:</h5>
                        <p>Self-learning. Since spring 2018. (Some pet projects on React, Node.js, and other JS technologies)
                            Beetroot Academy ONPU Course. Front-end semester: March 2018 – June 2018. I learned basic front-end development(HTML dev.) skills during these courses.
                        </p>

                        <br/>

                        <h5>Certificates:</h5>
                        <Link className="link" href="https://drive.google.com/file/d/1uiNhR_D7pPvHmZ5KmFodDmc-Qf5MdKmk/view">Beetroot course</Link><br/>
                        <Link className="link" href="https://drive.google.com/file/d/1Ya6af_ObPujD6UN2bMf_RS37VKXUE2KC/view?usp=sharing">English course Pre-Intermediate</Link><br/>
                        <Link className="link" href="https://drive.google.com/file/d/1XuQqzMZSCQyPVhEsrRdJ-E2jjQWG2tfQ/view">English course Intermediate</Link><br/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <h2>Hobbies & Interests</h2>
                        <hr/>
                        <p>I like the visual part of development. That&#39;s why I sometimes like to draw and work with graphics. In the past, I created a simple 2d game with a Scirra Construct program and painted sprites with Paint.NET. Due to this, I became interested in programming. My main hobbies are numismatics, history, and comics. And I just love Sci-fi.</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <h2>Soft skills</h2>
                        <hr/>
                        <ul className="ul">
                            <li className="li">Flexibility;</li>
                            <li className="li">Adaptability;</li>
                            <li className="li">Responsibility;</li>
                            <li className="li">Punctuality;</li>
                            <li className="li">Listening;</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Languages</h2>
                        <hr/>
                        <ul className="ul">
                            <li className="li">Ukrainian (native);</li>
                            <li className="li">Russian (trying to forget);</li>
                            <li className="li">English (Upper-Intermediate);</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
