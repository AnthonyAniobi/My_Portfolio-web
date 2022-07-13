import React, { useState } from 'react';
import './projects.scss';
import { Backend, Web, Mobile } from '../index';
import { FaReact } from 'react-icons/fa';
import { SiFlutter, SiPython } from 'react-icons/si';
import { useParams } from 'react-router';


const Projects = () => {

    const params = useParams().id;
    const [pageIndex, setPageIndex] = useState(0);


    const currentPage = () => {

        switch (params) {
            case 'backend':
                setPageIndex(0);
                return <Backend />

            case 'mobile':
                setPageIndex(1);
                return <Mobile />

            default:
                setPageIndex(2)
                return <Web />
        }
    }

    const changePage = (index: number) => {
        setPageIndex(index);
    }


    return (
        <div className='projects'>
            <div className='projects-sidebar'>
                <div />
                <FaReact className={`projects-sidebar-icon ${pageIndex === 2 && 'selected'}`} onClick={() => { changePage(2) }} />
                <SiFlutter className={`projects-sidebar-icon ${pageIndex === 1 && 'selected'}`} onClick={() => { changePage(1) }} />
                <SiPython className={`projects-sidebar-icon ${pageIndex === 0 && 'selected'}`} onClick={() => { changePage(0) }} />

            </div>

            <div className="projects-body">
                {currentPage()}
            </div>
        </div>
    )
}

export default Projects