import React from 'react';
import './laptop.scss';
import laptopImage from '../../assets/images/laptop.png';

const Laptop = () => {

    return (
        <div className='laptop'>
            <img src={laptopImage} alt="laptop image" />
            <div className="laptopScreen"></div>
        </div>
    )
}

export default Laptop