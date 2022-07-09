import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/projectcard/ProjectCard';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className='nameCard'>
                <h1 className="title">ANTHONY ANIOBI</h1>
                <h4 className="subtitle">Software Engineer</h4>
            </div>
            <div className='projectStacks'>
                <h1 className="title">My Projects</h1>
                <div className='projectStacksCard'>
                    <ProjectCard title='Mobile' url='/mobile' />
                    <ProjectCard title='Websites' url='/web' />
                    <ProjectCard title='Backend' url='/backend' />

                </div>
            </div>
        </div>
    )
}

export default Home