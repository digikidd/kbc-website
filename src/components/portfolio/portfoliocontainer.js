import React from "react";
import PortfolioItem from "./portfolioItem";
import {Element} from "react-scroll";
import {connect} from "react-redux";
import {getProjects} from "../../actions/index";

class PortfolioContainer extends React.Component {
    componentWillMount () {
        this.props.getProjects ()
    }

    render () {

        if (this.props.portfolioItems == undefined) {
            return (<div>loading</div>);
        }
        //console.log(this.props.portfolioItems);
        return (
            <div className="portfolio">
                <Element name="portfolio" className="portfolio">
                    <h2>Portfolio Title Goes Here</h2>
                    <div className="row">
                    {
                        this.props.portfolioItems.portfolioItems.map((item, index)=>{
                            return (
                                <PortfolioItem key={index} portfolio={item}/>
                            )
                        })
                    }
                    </div>
                </Element>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {portfolioItems: state.portfolio.projects};
}
export default connect (mapStateToProps, {getProjects}) (PortfolioContainer);