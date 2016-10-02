import React from "react";
import {Link, Element} from "react-scroll";


class Header extends React.Component {
    componentDidMount () {
        window.addEventListener ('scroll', this.navScroll);
    };

    navScroll () {
        var scrollTop = 0;
        $ (window).scroll (function () {
            scrollTop = $ (window).scrollTop ();
            if (scrollTop >= 50) {
                $ ('.navbar').addClass ('scrolled-nav');
            }
            else if (scrollTop < 100) {
                $ ('.navbar').removeClass ('scrolled-nav');
            }
        });
    };

    render () {
        return (

            <div className="container">
                    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                        <div className="navbar-header" classID="a">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="intro" spy={true} smooth={true} offset={-59} duration={500}>
                                <a className="logo"><img className="kbc-logo" src="../../images/kbc-icon.png"/></a>
                            </Link>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="navAbout">
                                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>about</Link>
                                </li>
                                <li className="navSkills">
                                    <Link to="skills" spy={true} smooth={true} offset={-94} duration={500}>skills</Link>
                                </li>
                                <li className="navPortfolio">
                                    <Link to="portfolio" spy={true} smooth={true} offset={-60}
                                          duration={500}>portfolio</Link>
                                </li>
                                <li className="navContact">
                                    <Link to="contact" spy={true} smooth={true} offset={-45}
                                          duration={500}>contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
    )
    }
    }

    export default Header;