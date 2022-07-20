import React from 'react';
import './android.scss';
import androidImage from '../../assets/images/android.png';

const Android = ({ children }: { children: JSX.Element }) => {
    return (
        <div className='android'>
            <img src={androidImage} alt="andorid" />
            <div>{children}</div>
        </div>
    )
}

export default Android