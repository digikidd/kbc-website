import React from 'react';


class PortfolioItem extends React.Component {
    render () {
        var portfolio = this.props.portfolio;

        if ( this.props.portfolio == undefined ) {
            return (<div>loading</div>);
        }

        return (
            <div className="p-list greyOut">
                <div className="portfolio-icons-l">
                    <a href={portfolio.github} className="p-git"><img className="git" src="../../images/github.png"/></a>
                </div>
                <div className="portfolio-icons-r">
                    <a href={portfolio.website} className="p-site"><img className="git" src="../../images/link.png"/></a>
                </div>
                <div className="p-name">{portfolio.name}</div>
                <hr className="hrSkill"/>
                <div className="p-desc">{portfolio.description}</div>
                <div className="p-tech">Languages used: </div>
                <div className="p-tech-list">
                    {
                        JSON.parse(portfolio.technologies).map((item, index)=>{
                        return (
                            <div className="p-items" key={index}>{item.toLowerCase()}</div>)}
                            )
                    }
                </div>

            </div>
        )
    }
}

export default PortfolioItem;
