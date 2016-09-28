import React from "react";

class PortfolioItem extends React.Component{

    render () {
        var portfolio = this.props.portfolio;
        var DefaultTitle = "kbc-ninja project";
        var DefaultDescription = "Hong Kong Fooey";
        var DefaultTechnologies = "Foobar";
        var DefaultGitHub = "https://github.com/digikidd";
        var DefaultWebAdress = "www.kbccode.com";


        return (
        <div className="portfolioItem col-xs-12 col-sm-4 col-lg-3">
            <h2>{portfolio.name ? portfolio.name : DefaultTitle}</h2>
            <h2>{portfolio.description ? portfolio.description : DefaultDescription}</h2>
            <h2>{portfolio.technologies ? portfolio.technologies : DefaultTechnologies}</h2>
            <h2>{portfolio.github ? portfolio.github : DefaultGitHub}</h2>
            <h2>{portfolio.webAddress ? portfolio.webAddress : DefaultWebAdress}</h2>
        </div>
        )
    }
}

export default PortfolioItem;
