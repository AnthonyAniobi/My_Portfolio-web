import React from 'react';
import Android from '../../components/android/Android';
import './mobile.scss';

const Mobile = () => {
    return (
        <div className='mobile'>
            <div className="mobile-preview_container">
                <Android />
            </div>
            <div className="mobile-projects_container">
                <h1 className="mobile-projects-title">
                    Mobile projects
                </h1>
                <div className="mobile-projects-list-container">
                    <div className="mobile-project-item">
                        something
                    </div>
                    <div className="mobile-project-item">
                        something
                    </div>
                    <div className="mobile-project-item">
                        something
                    </div>
                    <div className="mobile-project-item">
                        something
                    </div>
                    <div className="mobile-project-item">
                        something
                    </div>
                    <div className="mobile-project-item">
                        something
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mobile