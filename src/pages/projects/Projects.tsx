import React, { useState } from 'react';
import './projects.scss';
import { Backend, Web, Mobile } from '../index';
import { FaReact } from 'react-icons/fa';
import { SiFlutter, SiPython } from 'react-icons/si';
import { useParams } from 'react-router';


const Projects = () => {

    const params = useParams();
    let pageId: number = parseInt(params.id!, 0);
    const [pageIndex, setPageIndex] = useState(pageId);


    const currentPage = () => {

        switch (pageIndex) {
            case 1:
                return <Mobile />

            case 2:
                return <Backend />

            default:
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
                <FaReact className={`projects-sidebar-icon ${pageIndex === 0 && 'selected'}`} onClick={() => { changePage(0) }} />
                <SiFlutter className={`projects-sidebar-icon ${pageIndex === 1 && 'selected'}`} onClick={() => { changePage(1) }} />
                <SiPython className={`projects-sidebar-icon ${pageIndex === 2 && 'selected'}`} onClick={() => { changePage(2) }} />

            </div>

            <div className="projects-body">
                {currentPage()}
            </div>
        </div>
    )
}

export default Projects