import React from 'react';
import Android from '../../components/android/Android';
import './mobile.scss';
import { ProjectsList, UserInfo } from '../../components';
import { SiFlutter } from 'react-icons/si';

const Mobile = () => {
    return (
        <div className='mobile'>
            <div className="mobile-container">
                <Android >
                    <ProjectsList type="Mobile" />
                </Android>
                <div className="mobile-content">
                    <UserInfo stack='Mobile' icon={<SiFlutter />} />
                </div>
            </div>
        </div>

    )
}

export default Mobile