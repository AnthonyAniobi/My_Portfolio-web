import React from 'react';
import ProjectCard from '../projectcard/ProjectCard';
import './projectsList.scss';



const ProjectsList = ({ type }: { type: string }) => {
    return (
        <div className='projectsList'>
            <h1>{type}</h1>
            <p>something in the file that would be in a line something in the file that would be in a line</p>
            <div className="allProjects">
                {/* <ProjectCard {...allProjects[0]} /> */}
                {/* <ProjectCard {...allProjects[0]} /> */}
                {/* {
                    allProjects.map((_project) => (<ProjectCard {..._project} />))
                } */}
            </div>
        </div>
    )
}

export default ProjectsList