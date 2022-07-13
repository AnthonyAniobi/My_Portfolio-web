import React from 'react';
import './projectcard.scss';
import mobileImage from '../../assets/images/android.png';
import laptopImage from '../../assets/images/laptop.png';
import serverImage from '../../assets/images/server.png';

const ProjectCard = ({ title, url, icon, onClick, imageId }: { title: string, url: string, icon?: any, onClick: Function, imageId: number }) => {

    const backgroundImage = () => {
        switch (imageId) {
            case 0:
                return mobileImage;
            case 1:
                return laptopImage;
            default:
                return serverImage;
        }
    }

    return (
        <div className='projectcard' onClick={() => onClick()}>
            <div className="cardTitle">
                {title}
            </div>
            {icon}
            <img src={backgroundImage()} alt="back" />
        </div>
    )
}

export default ProjectCard