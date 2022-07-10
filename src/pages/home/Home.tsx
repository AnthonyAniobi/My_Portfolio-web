import React from 'react';
// import ProjectCard from '../../components/projectcard/ProjectCard';
import './home.scss';
import programmer from '../../assets/gif/programmer.gif';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className='home_bottom-bar'></div>
            <div className="home_top-navbar">
                <ul>
                    <li>Flutter</li>
                    <li>React</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className='home_gif-container'>
                <img src={programmer} alt="programmer" />
            </div>
            <div className='home_title-container'>
                <h1 className="home_title">ANTHONY ANIOBI</h1>
                <h4 className="home_subtitle">Software Engineer</h4>
                <div className='home_buttons-container'>
                    <Link to='/about' className='home_about-button'>About Me</Link>
                    <Link to='/projects' className='home_project-button'>My Projects</Link>
                </div>
            </div>

        </div>
    )
}

export default Home