import React from 'react';
import './server.scss';
import serverImage from '../../assets/images/server.png';
import { ProjectsList, ProjectCard } from '..';
import { projectData } from '../../models/data';

const Server = ({ children }: { children?: JSX.Element }) => {
    return (
        <div className='server'>
            <img src={serverImage} alt="server" />
            <div>
                <div>

                    Backend Projects


                    that would work and then

                    <br />
                    <br />
                    <br />do something on my end
                    <h1>some thing</h1>
                    <br /><br />
                    how dy
                    <br />
                    that would work and then

                    <br />
                    <br />
                    <br />do something on my end
                    <h1>some thing very good ill do every day</h1>
                    <br /><br />
                    how dy
                    {/* <ProjectsList type="server" /> */}
                </div>
            </div>
        </div>
    )
}

export default Server