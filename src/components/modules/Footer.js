import React, {Component} from 'react';
import {Link} from "react-router-dom";
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faMapMarked, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faTelegram, faGithub, faSkype, faPinterest, faReact} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
    	const year = new Date().getFullYear();
        return (
            <footer className="l-footer">
                <div className="container footer-blocks d-flex between">
                    <article className="site-map">
                        <h5>Site map</h5>
                        <ul>
                            <li><Link to="#" className="link">News</Link></li>
                            <li><Link to="#" className="link">Blog</Link></li>
                            <li><Link to="#" className="link">Files</Link></li>
                            <li><Link to="#" className="link">CV</Link></li>
                            <li><Link to="#" className="link">Contacts</Link></li>
                        </ul>
                    </article>

                    <article className="follow-me">
                        <h5>Follow me</h5>
                        <div className="d-flex center-horizontal icons-container">
                            <a href="https://www.linkedin.com/in/eugene-batenko-west-lion/"
                               className="social-link linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                            <a href="https://t.me/West_Lion" className="social-link telegram"><FontAwesomeIcon
                                icon={faTelegram}/></a>
                            <a href="https://github.com/EugeneBatenko" className="social-link"><FontAwesomeIcon
                                icon={faGithub}/></a>
                            <a href="https://join.skype.com/invite/bGz0uELm14qc" className="social-link skype"><FontAwesomeIcon icon={faSkype}/></a>
                            <a href="https://www.pinterest.com/batenkoev/" className="social-link pinterest"><FontAwesomeIcon icon={faPinterest}/></a>
                        </div>
                    </article>

                    <article className="contact-me">
                        <h5>Contact me</h5>
                        <p><FontAwesomeIcon icon={faPhone}/> +380 95 14 99 279</p>
                        <p><FontAwesomeIcon icon={faMapMarked}/> Ukraine</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> batenko.e.v@gmail.com</p>
                        {/*<p><FontAwesomeIcon icon={faSkype}/> <a href="https://join.skype.com/invite/bGz0uELm14qc">Tap to invite</a></p>*/}
                    </article>

                </div>
                <div className="footer-panel d-flex center-vertical">
                    <div className="container d-flex between">
                        <p>{year}. All right reserved. Eugene Batenko<br/>
                        Pictures taken from <a href="www.pexels.com">www.pexels.com</a></p>
                        <p>Built on React <FontAwesomeIcon icon={faReact}/></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;