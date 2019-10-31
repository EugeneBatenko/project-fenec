import React, {Component} from 'react';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import ScrollToTop from "../MainPage/MainPage";

class News extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>

                </main>
                <Footer/>
            </div>
        );
    }
}

export default News;