import React from 'react';
import './laptop.scss';
import laptopImage from '../../assets/images/laptop.png';
import { ProjectsList } from '..';

const Laptop = () => {

    return (
        <div className='laptop'>
            <img src={laptopImage} alt="laptop" />
            <div>
                <div>
                    <div className='content'>
                        <ProjectsList type="Web" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laptop