import React from 'react';
import './projects.scss';

const Projects = ({ type }: { type: String }) => {
    return (
        <div className='inner__projects'>
            <h2>{type.toUpperCase()} PROJECT</h2>
            <div>
                <div>interactive {type} device in production</div>
            </div>

        </div>
    )
}

export default Projects