import React from 'react';
import './projectsList.scss';

const ProjectsList = ({ type }: { type: string }) => {
    return (
        <div className='projectsList'>
            <h1>{type}</h1>

        </div>
    )
}

export default ProjectsList