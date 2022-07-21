import React from 'react';
import './projects.scss';
// import { Backend, Web, Mobile } from '../index';
import { FaReact } from 'react-icons/fa';
import { SiFlutter, SiPython } from 'react-icons/si';
import { ProjectCard } from '../../components';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
    const navigate = useNavigate();

    const moveToPage = (link: string) => {
        return navigate(link);
    }

    return (
        <div className='projects'>
            <div className="projects-sidebar">
                <div> </div>
                <SiFlutter className='selected' />
                <FaReact />
                <SiPython />
            </div>
            <div className='projects-content'>

            </div>
        </div>
    )
}

export default Projects