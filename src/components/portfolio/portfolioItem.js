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

        return (
            <div className="list-group project-list">
                    <p className="list-group-item-heading project-list p-name">{portfolio.name ? portfolio.name : DefaultTitle}</p>
                    <h5 className="list-group-item-text project-list p-desc">{portfolio.description ? portfolio.description : DefaultDescription}</h5>
                    <p className="list-group-item-text project-list p-tech">Languages used: {portfolio.technologies ? JSON.parse(portfolio.technologies).map((item, index)=>{
                            return (
                                <p className="list-group-item-text project-list p-tech-li" key={index}>{item.toLowerCase()}</p>
                            )
                        }) : DefaultTechnologies
                    }</p>
                    <div className="portfolio-icons"><a href={portfolio.github ? portfolio.github : DefaultGitHub} className="list-group-item active project-list p-git"><img className="git" src="../../images/github.png"/></a></div>
                    <div className="portfolio-icons"><a href={portfolio.website ? portfolio.website : DefaultWebsite} className="list-group-item active project-list p-site"><img className="git" src="../../images/link.png"/></a></div>
                <hr className="hrSkill"/>
            </div>
        )
    }
}

export default PortfolioItem;
