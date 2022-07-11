import React from 'react';
import './web.scss';
import Laptop from '../../components/laptop/Laptop';

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
            </div>
        </div>
    )
}

export default Web