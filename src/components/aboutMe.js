import React from 'react';
import {Element} from 'react-scroll';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="aboutMe">
                <Element name="about">
                    <div className="masthead"></div>
                    <h4>
                        so that's <strong>me.</strong> my <strong>name</strong> is kelly <strong>carmichael.</strong>
                    </h4>
                    <p>
                        I consider myself a full stack developer because I enjoy the creative aspect of styling with power of SASS, but I also enjoy testing my logic with back-end development using frameworks like React and Angular.
                    </p>
                    <h4>a little <strong>about</strong> me</h4>
                    <p>
                        My background is one of creative aspirations ranging from sound design and live music engineering at places like XM Radio, Foxx On The Run, and Compass Learning to programming for TRX Data Services and ultimately expanding my skill-sets with various front-end/back-end web development projects.
                    </p>
                    <p>
                        I started my journey with sound design and audio production in a small production house creating radio imaging and promos
                    </p>
                    <p>
                        to working at a satellite radio company creating imaging at a national and even global level.
                    </p>
                    <br/>
                    <p>
                        I quickly became obsessed and fascinated with computers and technology which ultimately led to discovering the world of programming. This led to going back to school for a programming languages education and from there a programming position at TRX Data Services.
                    </p>
                    <br/>
                    <p>
                        I am passionate about using my creativity and logic creating websites, web applications, or mobile apps.
                    </p>
                    <br/>
                    <p>
                        Thank you checking out my info and my portfolio site!
                    </p>
                    <br/>
                    <h5>
                        I am <strong>excited</strong> you made it <strong>this far</strong> far and I hope we can work <strong>together</strong> soon!
                    </h5>
                    <img className="cabo" src="../../images/kbc-cabo.jpg"></img>
                    <hr className="faded"/>
                </Element>
            </div>
        )
    }
}

export default AboutMe;