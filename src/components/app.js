import React, { Component } from 'react';


//Components
import Header from "./header";
import Introduction from "./introduction";
import AboutMe from "./aboutMe";
import MySkills from "./mySkills";
import PortfolioContainer from "./portfolio/portfoliocontainer";
import Contact from "./contact";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <Introduction/>
        <AboutMe/>
        <MySkills/>
        <PortfolioContainer/>
        <Contact/>
      </div>
    );
  }
}
