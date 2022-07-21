import React, { useState } from 'react';
import './projects.scss';
import { FaReact } from 'react-icons/fa';
import { SiFlutter, SiPython } from 'react-icons/si';
import Web from '../web/Web';
import Mobile from '../mobile/Mobile';
import Backend from '../backend/Backend';


const Projects = () => {
    const [pageIndex, setPageIndex] = useState(0);

    const currentPage = (index: number) => {
        switch (index) {
            case 1:
                return <Mobile />
            case 2:
                return <Backend />
            default:
                return <Web />
        }
    }

    return (
        <div className='projects'>
            <div className="projects-sidebar">
                <div> </div>
                <FaReact className={pageIndex === 0 ? 'selected' : ''} onClick={() => setPageIndex(0)} />
                <SiFlutter className={pageIndex === 1 ? 'selected' : ''} onClick={() => setPageIndex(1)} />
                <SiPython className={pageIndex === 2 ? 'selected' : ''} onClick={() => setPageIndex(2)} />
            </div>
            <div className='projects-content'>
                {currentPage(pageIndex)}
            </div>
        </div>
    )
}

export default Projects