import React from 'react';
import './web.scss';
import Laptop from '../../components/laptop/Laptop';
import { UserInfo } from '../../components';
import { FaReact } from 'react-icons/fa';

const Web = () => {
    return (
        <div className="web">

            <div className="web-container">
                <Laptop>

                    <h1>projects</h1>
                </Laptop>
                <div className="web-content">
                    <UserInfo stack='Web' icon={<FaReact />} />
                </div>
            </div>
        </div>
    )
}

export default Web