import React from 'react';
import { Element } from 'react-scroll';

class Contact extends React.Component {

    icons = [
        { ICON: "../../images/contact/email.png", LINK: "mailto:digikidd@gmail.com?subject=Visiting Your Site" },
        { ICON: "../../images/contact/facebook.png", LINK: "http://facebook.com/kbctexas" },
        { ICON: "../../images/contact/github.png", LINK: "https://github.com/digikidd" },
        { ICON: "../../images/contact/linkedin.png", LINK: "https://www.linkedin.com/in/kelly-carmichael-1b80b530" },
        { ICON: "../../images/contact/skype.png", LINK: "skype:digikidd?call" },
        { ICON: "../../images/contact/twitter.png", LINK: "https://twitter.com/kbctexas" }
    ];

    render () {
        return (
            <div className="contact">
                <Element name="contact" className="mycontact">
                    <div className="contactMe">
                        <h1>would <strong>you</strong> like to <strong>work</strong> together?</h1>
                    </div>
                    <div className="wrap">
                        {this.icons.map ( ( item, index )=> {
                            return (
                                    <a href={item.LINK}>
                                        <img className="contactIcons" key={index} src={item.ICON}></img>
                                    </a>
                            )
                        } )}
                    </div>
                    <div className="banding"></div>
                </Element>
            </div>
        )
    }
}

export default Contact;
