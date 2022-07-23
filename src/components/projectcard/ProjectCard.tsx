import React from 'react';
import './projectcard.scss';

const ProjectCard = ({ title, description }: { title: string, description: string }) => {
    // const { title, description } = props;
    return (
        <div className='projectcard'>
            <div className="cardTitle">
                {title}
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard