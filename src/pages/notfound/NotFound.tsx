import React from 'react';
import './notfound.scss';
import image404 from '../../assets/gif/404.gif';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className="custom-shape-divider-bottom-1657745421">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <h1 className="notfound-title">
                This Page does not exist
            </h1>
            <img src={image404} alt='404' />
            <h4 className="notfound-subtitle">
                Checkout these other pages
            </h4>
            <div className="notfound-options">
                some options
            </div>
        </div>
    )
}

export default NotFound