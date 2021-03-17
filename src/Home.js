import React from 'react';
import { Link } from "react-router-dom";

import './home.scss';
import data from './data.js'

const Home = () => {
    return <div>
        <h1>Front end Projects</h1>
        <div className='grid-container'>
            {data.map((project,i) => {
                return (
                    <Link to={project.url} key={i}>
                        <div className='grid-item' >
                            <img className='project__image' src={project.image} alt='invalid' />
                            <p className='project__title'>{project.title}</p>
                        </div>
                    </Link>
                )
            })}
        </div>

    </div>;
};

export default Home