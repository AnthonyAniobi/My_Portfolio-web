import React, { useState } from 'react';
import './projects.scss';
import { Backend, Web, Mobile } from '../index';
import { FaReact } from 'react-icons/fa';
import { SiFlutter, SiPython } from 'react-icons/si';

const Projects = () => {

    const [pageIndex, setPageIndex] = useState(0);

    const currentPage = () => {
        let selectedPage: JSX.Element;

        switch (pageIndex) {
            case 1:
                selectedPage = <Mobile />
                break;
            case 2:
                selectedPage = <Backend />
                break;
            default:
                selectedPage = <Web />
                break;
        }
        return selectedPage
    }

    const changePage = (index: number) => {
        setPageIndex(index);
    }


    return (
        <div className='projects'>
            <div className='projects-sidebar'>
                <FaReact className={`projects-sidebar-icon ${pageIndex == 0 && 'selected'}`} onClick={() => { changePage(0) }} />
                <SiFlutter className={`projects-sidebar-icon ${pageIndex == 1 && 'selected'}`} onClick={() => { changePage(1) }} />
                <SiPython className={`projects-sidebar-icon ${pageIndex == 2 && 'selected'}`} onClick={() => { changePage(2) }} />

            </div>

            <div className="projects-body">
                {currentPage()}
            </div>
        </div>
    )
}

export default Projects