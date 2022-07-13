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
            <div className="custom-shape-divider-top-1657731804">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <h1 className='projects-title'>Projects</h1>
            <h4 className="projects-subtitle">
                Some of my projects I have worked on
            </h4>
            <div className="projects-container">
                <ProjectCard title='Web' url='' icon={<FaReact />} onClick={() => moveToPage('/web')} imageId={1} />
                <ProjectCard title='Backend' url='' icon={<SiPython />} onClick={() => moveToPage('/backend')} imageId={2} />
                <ProjectCard title='Mobile' url='' icon={<SiFlutter />} onClick={() => moveToPage('/flutter')} imageId={0} />
            </div>
        </div>
    )
}

export default Projects