import React, { Component } from 'react';
import resumeData from '../resumeData';

const socialIcons = resumeData.socialLinks.map((icon, i) => {
    return (
        <li key={icon.name}>
            <a href={icon.url} target="_blank">
                <i className={icon.className}></i>
            </a>
        </li>
    )

})
class Header extends Component {
    render() {
        return (
            <div>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">Home</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">About</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">Resume</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">Works</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#testimonials">Testimonials</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">Contact</a>
                                </li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I am {resumeData.name}</h1>
                            <h3 style={{ color: "#fff", fontFamily: "sans-serif" }}>I am {resumeData.role} , {resumeData.roleDescription}</h3>
                            <hr />
                            <ul className="social">
                                {socialIcons}
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                </header>
            </div>
        )
    }
}
export default Header;