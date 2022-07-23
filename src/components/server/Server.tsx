import React from 'react';
import './server.scss';
import serverImage from '../../assets/images/server.png';
import { ProjectsList, ProjectCard } from '..';
import { projectData } from '../../models/data';

const Server = ({ children }: { children?: JSX.Element }) => {
    return (
        <div className='server'>
            <img src={serverImage} alt="server" />
            <div>
                <div>
                    <div className='content'>
                        <ProjectsList type="Backend" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Server