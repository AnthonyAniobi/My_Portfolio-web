import React from 'react';
import './laptop.scss';
import laptopImage from '../../assets/images/laptop.png';

const Laptop = ({ children }: { children: JSX.Element }) => {

    return (
        <div className='laptop'>
            <img src={laptopImage} alt="laptop" />
            <div className="laptopScreen">
                {children}
            </div>
        </div>
    )
}

export default Laptop