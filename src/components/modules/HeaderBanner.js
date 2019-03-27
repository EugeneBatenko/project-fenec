import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from "react-router-dom";
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';



class HeaderBanner extends Component {
    render() {

        const settings = {
            dots: false,
            arrows: false,
            fade: true,
            infinite: true,
            speed: 2200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,

        };
        return (
            <section className="l-header-banner">

                <div className="background-img-container"></div>

                <Slider {...settings} className="header-slider">
                    <div className="header-slider__slide">
                        <h2>Hi, I'm Eugene</h2>
                        <p>I'm, Front-end developer </p>
                    </div>
                    <div className="header-slider__slide">
                        <h2>Welcome</h2>
                        <p>You are on my site. Here you can find information about my activities.</p>
                    </div>
                    <div className="header-slider__slide">
                        <h2>What is this?</h2>
                        <p>This site is intended as a portfolio for Front-end developer and for personal purposes.</p>
                    </div>
                    <div className="header-slider__slide">
                        <h2>Activities</h2>
                        <p>I can create responsive website with latest technologies.</p>
                    </div>
                </Slider>

                <span className="scroll-button">
                    <Link to="#l-about" className="mouse">
                        <FontAwesomeIcon className="arrow-down" icon={faAngleDoubleDown}></FontAwesomeIcon>
                    </Link>
                </span>

            </section>
        );
    }
}

export default HeaderBanner;