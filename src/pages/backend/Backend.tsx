import React from 'react';
import './backend.scss';
import Server from '../../components/server/Server';
import ProjectCard from '../../components/projectcard/ProjectCard';

const Backend = () => {
    return (
        <div className='backend'>
            <div className="backend-preview_container">
                <Server />
            </div>
            <div className="backend-projects_container">
                <h1 className="backend-projects-title">
                    Backend Projects
                </h1>
                <div className="backend-projects-list-container">
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

export default Backend