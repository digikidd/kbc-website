import React from "react";
import {Element} from "react-scroll";

class MySkills extends React.Component {
    skills = [
        {name: "HTML5", stars: 4},
        {name: "CSS3", stars: 4},
        {name: "React", stars: 3},
        {name: "Javascript", stars: 4},
        {name: "Nodejs", stars: 3},
        {name: "Jquery", stars: 3},
        {name: "NPM", stars: 3},
        {name: "Gulp", stars: 2},
        {name: "SASS", stars: 3},
        {name: "AJAX", stars: 2},
        {name: "MongoDB", stars: 2},
        {name: "Redux", stars: 2},
        {name: "JSON", stars: 3}
    ];

    render () {

        return (
            <div className="skills">
                <Element name="skills" className="mySkills">
                    <h1><strong>Skills | </strong>Abilities</h1>
                    <hr className="hrSkill"/>
                    <div className="skill">
                        <div className="table-responsive">
                            <table className="table table-condensed">
                                <tbody>
                                {this.skills.map ((item, index)=> {
                                    var stars = Array (item.stars).fill ().map ((secondItem, secondIndex) => {
                                        return (<img key={secondIndex} src="../../images/goldstar.png"/>)
                                    });
                                        return (
                                                <tr key={index}>
                                                <td className="skill-names col-md-6 xs-6">{item.name}</td>
                                                <td className="skill-stars col-md-6 xs-6">{stars}</td>
                                                </tr>
                                        )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </Element>
            </div>
        )
    }

}

export default MySkills;
