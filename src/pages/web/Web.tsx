import React from 'react';
import './web.scss';
import Laptop from '../../components/laptop/Laptop';
import { ProjectsList, UserInfo } from '../../components';
import { FaReact } from 'react-icons/fa';

const Web = () => {
    return (
        <div className="web">

            <div className="web-container">
                <Laptop>
                    <ProjectsList type="web" />
                </Laptop>
                <div className="web-content">
                    <UserInfo stack='Web' icon={<FaReact />} />
                </div>
            </div>
        </div>
    )
}

export default Web