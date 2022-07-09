import React from 'react';
import './projectcard.scss';

const ProjectCard = ({ title, url }: { title: string, url: string }) => {
    return (
        <div className='projectcard'>
            <div className="cardTitle">
                {title}
            </div>
        </div>
    )
}

export default ProjectCard