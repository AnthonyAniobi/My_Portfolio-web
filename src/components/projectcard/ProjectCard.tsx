import React from 'react';
import './projectcard.scss';
import mobileImage from '../../assets/images/android.png';
import laptopImage from '../../assets/images/laptop.png';
import serverImage from '../../assets/images/server.png';

const ProjectCard = ({ title, description }: { title: string, description: string }) => {
    // const { title, description } = props;
    return (
        <div className='projectcard'>
            <div className="cardTitle">
                {title}
            </div>
            <p>{description}</p>
            {/* <img src={backgroundImage()} alt="back" /> */}
        </div>
    )
}

export default ProjectCard