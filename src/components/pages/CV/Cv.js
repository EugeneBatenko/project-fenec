import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';
//Modules
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
//img
import profilePhoto from './img/ava.png';
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faMapMarkerAlt, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faTelegramPlane, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
//
import ScrollToTop from "../../modules/ScrollToTop";

const data = {
    datasets: [{
        data: [
            89,
            96,
            60,
            50,
            91,
            88,
            34,
        ],
        backgroundColor: [
            'rgba(229,76,33,0.8)',
            'rgb(0,112,183,0.8)',
            'rgb(247,224,24,0.8)',
            'rgb(8,104,171,0.8)',
            'rgb(206,103,154,0.8)',
            'rgb(109,67,161,0.8)',
            'rgb(97,218,251,0.8)',
            '#F05133',
            '#D34A47',
            '#80C7FF',
            '#CC3534',
            '#3498DB',
            '#92C5E0'
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        'HTML',
        'CSS',
        'JS',
        'JQuery',
        'SASS/SCSS',
        'Bootstrap 4',
        'React'
    ],

};

const options = {
    maintainAspectRatio: false	// Don't maintain w/h ratio
}

class Cv extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <section className="l-cv-banner">
                        <img className="profile-photo" src={profilePhoto} alt="profile"/>
                    </section>

                    <section className="l-cv-main">

                        <article className="side-part">
                            <h4 className="mb-2">Personal details</h4>
                            <p className="name">Yevhen Batenko</p>
                            <p>Junior Front-end developer</p>
                            <p className="mb-2">21 years</p>

                            <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Ukraine, Ivano-Frankivsk</p>
                            <p><FontAwesomeIcon icon={faPhone}/> +380 95 14 99 279</p>
                            <p><FontAwesomeIcon icon={faEnvelope}/> batenko.e.v@gmail.com</p>
                            <p><FontAwesomeIcon icon={faTelegramPlane}/> @West_Lion</p>
                            <p><FontAwesomeIcon icon={faLinkedinIn}/> <a
                                href="https://www.linkedin.com/in/eugene-batenko-west-lion/">Link to profile</a></p>
                            <p><FontAwesomeIcon icon={faGithub}/> <a href="https://github.com/EugeneBatenko">Link to
                                profile</a></p>

                            <h5>Languages</h5>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Ukrainian</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb empty-romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">English</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Russian</p>
                                <p>"zrada" level</p>
                            </div>

                            <h5>Soft skills</h5>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Flexibility</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Adaptability</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Responsibility</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb empty-romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Punctuality</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Listening</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Time management</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                                <div className="romb empty-romb"></div>
                            </div>

                            <div className="d-flex center-vertical">
                                <p className="language-paragraph">Stress resistance</p>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                                <div className="romb"></div>
                            </div>


                        </article>

                        <article className="main-part">
                            <h2 className="text-center mb-2">Resume</h2>

                            <div className="m-accordion">

                                <div className="tab">

                                    <input id="tab-1" type="radio" name="tabs"/>
                                    <label htmlFor="tab-1">Summary <FontAwesomeIcon className="icon"
                                                                                    icon={faChevronDown}/></label>

                                    <div className="tab-content">
                                        <p>A motivated student of university, unfortunately I have a small commercial
                                            experience. I have all basic front-end skills and experience in creating a
                                            responsibility websites (see GitHub repositories). I would like to learn how
                                            to work in a professional team and create interesting projects. If I do not
                                            know something, I'm ready to learn new technologies and tools in a short
                                            time. Maybe I do not have enough experience, but I am fast learning and with
                                            every new project I work faster. </p>
                                    </div>
                                </div>

                                <div className="tab">

                                    <input id="tab-2" type="radio" name="tabs"/>
                                    <label htmlFor="tab-2">Experience <FontAwesomeIcon className="icon"
                                                                                       icon={faChevronDown}/></label>

                                    <div className="tab-content">
                                        <p><strong>Non commercial:</strong></p>

                                        <p>- Self-learning. Since Dec 2017. (And some university jobs too)</p>
                                        <p>- Beetroot Academy ONPU Course. Front-end semester March 2018 – June 2018.
                                            During these courses I got the
                                            basic skills for Front-end development(Markup dev.). </p>
                                        <p>- Practice in Ukietech company July 2018 – August 2018. During this practice,
                                            I consolidated my previous skills and learned to create projects with
                                            architecture SMACSS.</p>

                                        <p><strong>Commercial:</strong></p>
                                        <p>- Front-end developer at Apollonia</p>
                                        <p>Location: Ukraine, Odesa</p>
                                        <p>Period: from October 2018 to December 2018</p>
                                        <p>Short describe:
                                            Apollonia Healthcare, (Apollonia is a medical ecosystem, which includes
                                            electronic health records, telemedicine, medical tourism, medicine
                                            e-commerce, insurance policies and development of open markets for medical
                                            data trading. Patients, doctors and clinics, insurance and pharm)
                                        </p>
                                    </div>

                                </div>

                                <div className="tab">
                                    <input id="tab-3" type="radio" name="tabs"/>
                                    <label htmlFor="tab-3">Education <FontAwesomeIcon className="icon"
                                                                                      icon={faChevronDown}/></label>

                                    <div className="tab-content">
                                        <p>Odessa National Polytechnic University</p>
                                        <p>Odessa, Odessa Oblast</p>
                                        <p>September 2015 - June 2019, Bachelor degree, <br/>
                                            At the university I got basic skills in programming and searching for the
                                            necessary information.
                                        </p>
                                    </div>


                                </div>

                                <div className="tab">
                                    <input id="tab-4" type="radio" name="tabs"/>
                                    <label htmlFor="tab-4">Hobbies & Interests <FontAwesomeIcon className="icon"
                                                                                                icon={faChevronDown}/></label>

                                    <div className="tab-content">
                                        <p>I like the visual part in product development. That's why I sometimes like to
                                            draw and work with graphics. In the past, I created a simple 2d game with a
                                            scirra construct program, and painted sprites with Paint.NET. Due to this I
                                            became interested in programming. Also, in the free time of study, I develop
                                            a website portfolio for myself.
                                        </p>
                                        <p>My main hobbies are numismatics, history and comics. And I just love
                                            Sci-fi.</p>
                                    </div>


                                </div>

                                <div className="tab">
                                    <input id="tab-5" type="radio" name="tabs"/>
                                    <label htmlFor="tab-5">Professional skills <FontAwesomeIcon className="icon" icon={faChevronDown}/></label>

                                    <div className="tab-content">
                                        <Polar data={data} options={options}/>
                                    </div>


                                </div>

                            </div>


                        </article>

                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Cv;