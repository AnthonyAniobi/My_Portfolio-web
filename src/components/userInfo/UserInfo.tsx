import React from 'react';
import './userinfo.scss';

const UserInfo = ({ stack, icon }: { stack: string, icon: any }) => {
    return (
        <div className='userinfo'>
            <h1 className='userinfo-title'>
                Anthony Aniobi
            </h1>
            <div className="userinfo-stack-container">

                <h4 className='userinfo-subtitle'>
                    {stack} Developer
                </h4>
                {icon}
            </div>
            <div className="userinfo-button-container">

                <button className="userinfo-button-about">
                    About Me
                </button>
                <button className="userinfo-button-resume">Download CV</button>
            </div>
        </div>
    )
}

export default UserInfo