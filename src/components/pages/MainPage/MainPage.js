import React, { Component } from 'react';
import Header from '../../modules/Header';
import HeaderBanner from '../../modules/HeaderBanner';
import AboutSkills from '../../modules/AboutSkills';
import AboutMe from '../../modules/AboutMe';
import Projects from '../../modules/Projects';
import Footer from '../../modules/Footer';
//
import ScrollToTop from "../../modules/ScrollToTop";

class MainPage extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <HeaderBanner/>
                    <AboutSkills/>
                    <AboutMe/>
                    <Projects/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;