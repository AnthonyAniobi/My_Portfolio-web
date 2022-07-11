import React from 'react';
import './web.scss';
import Laptop from '../../components/laptop/Laptop';
import ProjectCard from '../../components/projectcard/ProjectCard';

const Web = () => {
    return (
        <div className="web">
            <div className="web-preview_container">
                <Laptop />
            </div>
            <div className="web-projects_container">
                <h1 className="web-projects-title">
                    Web Projects
                </h1>
                <div className="web-projects-list-container">
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

export default Web