import React from 'react';
import './backend.scss';
import Server from '../../components/server/Server';

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
            </div>
        </div>
    )
}

export default Backend