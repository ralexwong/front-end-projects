
import React, { useState } from 'react';
import './style/index.scss';

const TicTacToe = () => {
    // const [one, setOne] = useState(null)
    // const [two, setTwo] = useState(null)
    // const [three, setThree] = useState(null)
    // const [four, setFour] = useState(null)
    // const [five, setFive] = useState(null)
    // const [six, setSix] = useState(null)
    // const [seven, setSeven] = useState(null)
    // const [eight, setEight] = useState(null)
    // const [nine, setNine] = useState(null)

    const [turn, setTurn] = useState('x')



    return <div className='center'>

        <div>It is {turn} move!</div>
        <div className='ttt'>
            {[...Array(9)].map((box, i) => {
                return <div key={i} className='ttt__box' onClick>
                    {}
                </div>
            })}
        </div>
    </div>
    ;
};

export default TicTacToe
