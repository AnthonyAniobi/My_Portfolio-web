import React from 'react';
import './android.scss';
import androidImage from '../../assets/images/android.png';
import { ProjectsList } from '..';

const Android = () => {
    return (
        <div className='android'>
            <img src={androidImage} alt="andorid" />
            <div>
                <div>
                    <div className='content'>
                        <ProjectsList type="Mobile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Android