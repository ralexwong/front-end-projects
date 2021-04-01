
import React, { useState } from 'react';
import './style/index.scss';

const data = [7,8,9,'/',4,5,6,'*',1,2,3,'+','.',0,'-']

const operator = new Set(['+','-','*','/','.'])

const Calculator = () => {
    const [current, setCurrent] = useState('')
    const [array, setArray] = useState([])

    const clear = () => {
        setCurrent('')
        setArray([])
    }

    const equals = () => {
        let i = 0;
        let copy = [...array]
        
        // multiply
        while (i < copy.length) {
            if (copy[i] === '*') {
                let product = copy[i-1] * copy[i+1]
                copy.splice(i-1, 3, product)
                setArray(copy)
                setCurrent(product)
            }
            i++
        }
        i = 0

        // divide
        while (i < copy.length) {
            if (copy[i] === '/') {
                let num = copy[i-1] / copy[i+1]
                copy.splice(i-1, 3, num)
                setArray(copy)
                setCurrent(num)
            }
            i++
        }
        i = 0

        // add
        while (i < copy.length) {
            if (copy[i] === '+') {
                let sum = copy[i-1] + copy[i+1]
                copy.splice(i-1, 3, sum)
                setArray(copy)
                setCurrent(sum)
            }
            i++
        }
        i = 0

        // subtract
        while (i < copy.length) {
            if (copy[i] === '-') {
                let sum = copy[i-1] - copy[i+1]
                copy.splice(i-1, 3, sum)
                setArray(copy)
                setCurrent(sum)
            }
            i++
        }
        
    }

    const check = (char) => {
        // checks if an operator is passed twice in a row
        if (typeof char !== 'number' && operator.has(array[array.length-1])) {
            return
        } 

        // combines numbers together
        if (typeof char == 'number' && typeof array[array.length-1] === 'number') {
            let num = array[array.length-1] * 10 + char;
            let copy = [...array]
            copy[copy.length-1] = num
            setArray(copy)
            return setCurrent(current + `${char}`)
        }

        setArray([...array, char])
        return setCurrent(current + ` ${char}`)
    }

    
    return <div className='center'>
        <div className='calculator'>
            <div className='calculator__current'>&nbsp;{current}</div>
            <button className='calculator__clear' onClick={() => clear()}>CLEAR</button>
            {data.map((char, i) => {
                return <button key={i} className='calculator__button' onClick={() => check(char)}>{char}</button>
            })}
            <button className='calculator__button' onClick={() => equals()}>=</button>
        </div>
    </div>
    
};

export default Calculator
