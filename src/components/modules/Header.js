import React, {Component} from 'react';
import {Link} from "react-router-dom";

//MOBILE MENU

//Sticky menu
window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos !== 0) {
        document.getElementById("header").style.background = "rgba(38,38,38,.95)";
    } else {
        document.getElementById("header").style.background = "rgba(0,0,0,.0)";
    }
}

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {showMenu: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            showMenu: !state.showMenu
        }));
    }


    render() {
        return (
            <header id="header">
                <div className="logo">
                    <Link to="/"><h1>Eugene</h1></Link>
                </div>
                <nav className="desktop-nav">
                    <ul>
                        <li><Link to="#" className="link">News</Link></li>
                        <li className="m-dropdown-list"><span className="link">Content</span>
                            <ul className="ul-dropdown">
                                <li><Link to="#" className="link">Files</Link></li>
                                <li><Link to="#" className="link">Other stuff</Link></li>
                            </ul>
                        </li>
                        <li className="m-dropdown-list"><span className="link">About</span>
                            <ul className="ul-dropdown">
                                <li><Link to="#" className="link">Blog</Link></li>
                                <li><Link to="/CV" className="link">CV</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#" className="link">Contacts</Link></li>
                    </ul>
                </nav>
                <nav className="mobile-nav">
                    <div className="hamburger-container">

                        <div className={this.state.showMenu ? "hamburger" : "hamburger open"} onClick={this.handleClick}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className={this.state.showMenu ? "mobile-nav__items" : "mobile-nav__items mobile-ul-active"}>
                        <ul>
                            <li><Link to="#">News</Link></li>
                            <li><Link to="#">Files</Link></li>
                            <li><Link to="#">Other stuff</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="/CV">CV</Link></li>
                            <li><Link to="#">Contacts</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

        );
    }
}


export default Header;