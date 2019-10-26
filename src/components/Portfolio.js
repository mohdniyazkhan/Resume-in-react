import React from 'react';
import resumeData from '../resumeData';


const Work = resumeData.portfolio.map((project, i) => {
    return (
        <div className="div25 columns portfolio-item">
            <div className="item-wrap">
                <a href="#modal-01">
                    <div className="portfolio-item-meta">
                        <h5>{project.name}</h5>
                    </div>
                </a>
            </div>
        </div>
    )
})
const Portfoliowork = (props) => {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {Work}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfoliowork;