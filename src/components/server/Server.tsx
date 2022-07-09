import React from 'react';
import './server.scss';
import serverImage from '../../assets/images/server.png';

const Server = () => {
    return (
        <div className='server'>
            <img src={serverImage} alt="server image" />
            <div></div>
        </div>
    )
}

export default Server