import React from 'react';




class PortfolioItem extends React.Component {
    render () {
        var portfolio = this.props.portfolio;
        var DefaultTitle = "kbc-ninja project";
        var DefaultDescription = "Hong Kong Fooey";
        var DefaultTechnologies = "Foobar";
        var DefaultGitHub = "https://github.com/digikidd";
        var DefaultWebsite = "www.kbccode.com";
        if (this.props.portfolio == undefined) {
            return (<div>loading</div>);
        }
        console.log(this.props.portfolio);
        return (
            <div className="list-group project-list">
                    <h1 className="list-group-item-heading project-list">{portfolio.name ? portfolio.name : DefaultTitle}</h1>
                    <p className="list-group-item-text project-list description">{portfolio.description ? portfolio.description : DefaultDescription}</p>
                    <p className="list-group-item-text project-list">{
                        portfolio.technologies ? JSON.parse(portfolio.technologies).map((item, index)=>{
                            return (
                                <p key={index}>{item}</p>
                            )
                        }) : DefaultTechnologies
                    }</p>
                    <div className="portfolio-icons"><a href={portfolio.github ? portfolio.github : DefaultGitHub} className="list-group-item active project-list"><img className="git" src="../../images/github.png"/></a></div>
                    <div className="portfolio-icons"><a href={portfolio.website ? portfolio.website : DefaultWebsite} className="list-group-item active project-list"><img className="git" src="../../images/link.png"/></a></div>
                <hr className="hrSkill"/>
            </div>
        )
    }
}

export default PortfolioItem;
