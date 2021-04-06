
import React, { useState } from 'react';
import './style/index.scss';

const data = ['TL', 'T', 'TR', 'L', 'M', 'R', 'BL', 'B', 'BR']

const Popover = () => {


    
    return <div className='center'>
        <div className='popover'>
            {data.map((box, i) => {
                return <div className='popover__container'>
                    <div className='popover__box'>{box}</div>
                    <div className={`popover__popover popover__popover--${box}`}>This is the content for {box} box</div>
                </div>
            })}
        </div>
    </div>;
};

export default Popover
