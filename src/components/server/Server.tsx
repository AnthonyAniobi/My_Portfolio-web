import React from 'react';
import './server.scss';
import serverImage from '../../assets/images/server.png';

const Server = ({ children }: { children?: JSX.Element }) => {
    return (
        <div className='server'>
            <img src={serverImage} alt="server" />
            <div>{children}</div>
        </div>
    )
}

export default Server