import React, {Component} from 'react';
import {Link} from "react-router-dom";
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {
    faReact,
    faPhp,
    faBootstrap,
    faHtml5,
    faCss3,
    faJs,
    faNodeJs,
    faNpm,
    faYarn,
    faGulp
} from '@fortawesome/free-brands-svg-icons';

class AboutSkills extends Component {
    render() {
        return (
            <section className="l-about-skills">

                <div className="m-section-header">
                    <h2>About</h2>
                    <h3>my development skills</h3>
                </div>

                <div className="geometry-blocks">
                    <div className="left-hexagon hexagon">
                        <span>Back-end</span>
                        <div className="back-hexagon first-hex">
                            <FontAwesomeIcon className="font-icons paint-brush-icon"
                                             icon={faDatabase}></FontAwesomeIcon>
                            <span>mySQL</span>
                        </div>
                        <div className="back-hexagon second-hex">
                            <FontAwesomeIcon className="font-icons php-icon" icon={faPhp}></FontAwesomeIcon>
                            <span>PHP(a little bit)</span>
                        </div>
                    </div>
                    <div className="center-hexagon hexagon">
                        <span>Front-end</span>
                        <div className="back-hexagon third-hex">
                            <FontAwesomeIcon className="font-icons react-icon" icon={faReact}></FontAwesomeIcon>
                            <span>React</span>
                        </div>
                        <div className="back-hexagon fourth-hex">
                            <div className="icon-container">
                                <FontAwesomeIcon className="font-icons html-icon" icon={faHtml5}></FontAwesomeIcon>
                                <FontAwesomeIcon className="font-icons css-icon" icon={faCss3}></FontAwesomeIcon>
                                <FontAwesomeIcon className="font-icons js-icon" icon={faJs}></FontAwesomeIcon>
                            </div>
                            <span>Markup Dev.</span>
                        </div>
                        <div className="back-hexagon fourth-hex-right">
                            <FontAwesomeIcon className="font-icons bootstrap-icon" icon={faBootstrap}></FontAwesomeIcon>
                            <span>Bootstrap 4</span>
                        </div>
                    </div>
                    <div className="right-hexagon hexagon">
                        <span>Other</span>
                        <div className="back-hexagon fifth-hex">
                            <FontAwesomeIcon className="font-icons gulp-icon" icon={faGulp}></FontAwesomeIcon>
                            <span>Gulp</span>
                        </div>
                        <div className="back-hexagon sixth-hex">
                            <div className="icon-container">
                                <FontAwesomeIcon className="font-icons npm-icon" icon={faNpm}></FontAwesomeIcon>
                                <FontAwesomeIcon className="font-icons yarn-icon" icon={faYarn}></FontAwesomeIcon>
                            </div>
                            <span>Managers (NPM, Yarn)</span>
                        </div>
                    </div>
                </div>
                <div className="container d-flex center-horizontal">
                    <Link to="#" className="button-learn-more"><p>Read More</p></Link>
                </div>
            </section>
        );
    }
}

export default AboutSkills;