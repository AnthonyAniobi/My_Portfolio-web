import React from 'react';
import './userinfo.scss';
import { useNavigate } from 'react-router-dom';

const UserInfo = ({ stack, icon }: { stack: string, icon: any }) => {

    const navigate = useNavigate();

    const downloadFile = () => {
        navigate("./pdf/")
    }

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

                <button className="userinfo-button-about" onClick={() => { navigate('/about') }}>
                    About Me
                </button>
                <button className="userinfo-button-resume">Download CV</button>
            </div>
        </div>
    )
}

export default UserInfo