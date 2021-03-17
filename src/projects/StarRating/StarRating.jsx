import React, { Fragment, useEffect, useState } from 'react';
import './style/index.scss';

const StarRating = (props) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState();

    // having a hook for the star color isn't necessary here but might be for bigger applications
    const [starColor, ] = useState('yellow')

    const clickHandler = (val) => {
        if (val === rating && rating !== null) {
            setRating(null);
        } else {
            setRating(val);
        }
    }

    useEffect(() => {
        document.title ='Give This Project a Rating!';
    }, [])


    return <Fragment>
        <div className='stars'>
            {[...Array(5).keys()].map(n => {
                const ratingValue = n+1;
                return (
                    <span
                    className="star"
                    key={ratingValue}
                    value={ratingValue}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => clickHandler(ratingValue)}
                    style={{ color: ratingValue <= (hover || rating) ? starColor: '' }}
                    >
                    &#9733;
                    </span>
                );
            })}
        </div>
    </Fragment>;
};

export default StarRating
