import React, {Component} from 'react';


class AboutMe extends Component {
    render() {
        return (
            <section className="l-about-me pt-2">

                <div className="container">
                    <div className="m-section-header">
                        <h2>About me</h2>
                    </div>
                    <blockquote>"Everything start for small."</blockquote>
                    <p><span>2017</span> -  I started studying PHP and mySQL</p>
                    <p><span>2018</span> spring - joined the free university course from Beetroot Academy "Front end semester". During the course mastered the basic principles of markup development (HTML5, CSS3, JS, SCSS)</p>
                    <p><span>2018</span> summer - was practicing at the Ukietech</p>
                    <p><span>2018</span> autumn - first commercial experience as a markup developer (Bootstrap 4) in Apollonia healthcare</p>
                    <p>For more detail you can see CV.</p>
                </div>

            </section>
        );
    }
}

export default AboutMe;