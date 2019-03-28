import React, {Component} from 'react';
//Modules
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
//img
import profilePhoto from './img/joke.jpg';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faTelegramPlane, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

class Cv extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <Header/>
                <main>
                    <section className="l-cv-banner">
                        <picture>
                            <img className="profile-photo" src={profilePhoto} alt="profile"/>
                        </picture>
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
                            <p><FontAwesomeIcon icon={faLinkedinIn}/> <a href="https://www.linkedin.com/in/eugene-batenko-west-lion/">Link to profile</a></p>
                            <p><FontAwesomeIcon icon={faGithub}/> <a href="https://github.com/EugeneBatenko">Link to profile</a></p>
                        </article>

                        <article className="main-part">

                        </article>

                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Cv;