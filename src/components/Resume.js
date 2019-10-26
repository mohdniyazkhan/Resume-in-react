import React from 'react';
import resumeData from '../resumeData';

const educationwork = resumeData.education.map((edu, i) => {
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>{edu.UniversityName}</h3>
                <p className="info">
                    <span>
                        <span>{edu.specialization}<br /></span>
                        <span>Passout: {edu.MonthOfPassing}<span>{edu.YearOfPassing}</span></span><br />
                        <span>{edu.Achievements}</span>
                    </span>
                </p>
            </div>
        </div>
    )
})

const workhistory = resumeData.work.map((workhist, i) => {
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>{workhist.CompanyName}</h3>
                <p className="info">
                    <span>
                        <span>{workhist.specialization}<br /></span>
                        <span>Passout: {workhist.MonthOfLeaving}<span>{workhist.YearOfLeaving}</span></span><br />
                        <span>{workhist.Achievements}</span>
                    </span>
                </p>
            </div>
        </div>
    )
})

const skillhistory = resumeData.skills.map((skillhist, i) => {
    return (
        <li >
            <span className={`bar-expand ${skillhist.skillname.toLowerCase()}`}>
            </span><em>{skillhist.skillname}</em>
        </li>
    )
})
const ResumeWork = (props) => {
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {educationwork}
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {workhistory}
                </div>
            </div>
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                        {resumeData.skillsDescription}
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {skillhistory}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ResumeWork;