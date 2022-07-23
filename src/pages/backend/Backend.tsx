import React from 'react';
import './backend.scss';
import Server from '../../components/server/Server';
import { ProjectsList, UserInfo } from '../../components';
import { SiPython } from 'react-icons/si';

const Backend = () => {
    return (
        <div className='backend'>
            <div className="backend-container">
                <Server >
                    <ProjectsList type="backend" />
                </Server>
                <div className="backend-content">
                    <UserInfo stack='Backend' icon={<SiPython />} />
                </div>
            </div>

        </div>
    )
}

export default Backend