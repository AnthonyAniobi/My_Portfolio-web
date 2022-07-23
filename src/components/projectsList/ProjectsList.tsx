import React from 'react';
import { projectData } from '../../models/data';
import ProjectCard from '../projectcard/ProjectCard';
import './projectsList.scss';


const ProjectsList = ({ type }: { type: string }) => {
    return (
        <div className='projectsList'>
            <div className="titleBar">
                <h1>{type} Projects</h1>
            </div>
            <p>something in the file that would be in a line something in the file that would be in a line</p>
            <div className="allProjects">
                {
                    projectData.map((_project) => (<ProjectCard {..._project} />))
                }
            </div>
        </div>
    )
}

export default ProjectsList