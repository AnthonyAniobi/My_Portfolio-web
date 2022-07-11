import React from 'react';
import Android from '../../components/android/Android';
import ProjectCard from '../../components/projectcard/ProjectCard';
import './mobile.scss';

const Mobile = () => {
    return (
        <div className='mobile'>
            <div className="mobile-preview_container">
                <Android />
            </div>
            <div className="mobile-projects_container">
                <h1 className="mobile-projects-title">
                    Mobile projects
                </h1>
                <div className="mobile-projects-list-container">
                    <ProjectCard title="1" url="" />
                    <ProjectCard title="2" url="" />
                    <ProjectCard title="3" url="" />
                    <ProjectCard title="4" url="" />
                    <ProjectCard title="5" url="" />
                    <ProjectCard title="6" url="" />
                </div>
            </div>
        </div>

    )
}

export default Mobile