import React, { Fragment, useState } from 'react';
import './style/index.scss';

const StarRating = (props) => {
    const [rate, setRate] = useState()


    return <Fragment>
        <div className='stars'>
            {[...Array(5).keys()].map(n => {
                return (
                    <span
                    className="star"
                    key={n+1}
                    data-value={n+1}
                    // onMouseOver={this.hoverHandler}
                    // onClick={this.starClickHandler}
                    >
                    &#9733;
                    </span>
                );
            })}

        </div>
    </Fragment>;
};

export default StarRating
