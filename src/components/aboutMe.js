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
                        My background is one of creative aspirations ranging from sound design and live music engineering at places like XM Radio and Compass Learning to expanding my skills with front-end and back-end web development.
                    </p>
                    <p>
                        I started my journey with sound design and audio production in a small production house creating radio imaging and promos
                    </p>
                    <p>
                        to working at a satellite radio company on a global level.
                    </p>
                    <p>
                        I quickly became obsessed and fascinated with computers and technology which ultimately led to discovering the amazing world of programming.
                    </p>
                    <p>
                        I am passionate about using my creativity and logic to create exciting and engaging websites and web applications.
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