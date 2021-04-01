
import React, { Fragment, useState } from 'react';
import styles from './style/index.scss';

const Counter = () => {
    const [count, setCount] = useState(0)

    return <Fragment>
        {count}
        <button className={styles.button} onClick={() => setCount(count+1)}>Increment</button>
        <button className={styles.button} onClick={() => setCount(count-1)}>Decrement</button>
    </Fragment>;
};

export default Counter
