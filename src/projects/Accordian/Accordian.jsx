import React, { useState } from 'react';
import './style/index.scss';

const info = [
    {
        title: 'Accordian Title #1',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        title: 'Accordian Title #2',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        title: 'Accordian Title #3',
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]

const Accordian = (props) => {

    const [currentAccordian, setCurrentAccordian] = useState()

    const activate = (val) => {
        if (val === currentAccordian) {
            return setCurrentAccordian(null)
        }
        setCurrentAccordian(val)
    }

    return <div className='container'>
        <div className='accordian'>
            {info.map((block, i) => {
                const accordianNumber = i+1
                return <div key={i}>
                    <div onClick={() => activate(accordianNumber)} className='accordian__title'>
                        {block.title} <span className={`accordian__button ${ accordianNumber === currentAccordian ? 'accordian__button--open' : '' }`}>V</span>
                    </div>
                    <div className={`accordian__caption ${ accordianNumber === currentAccordian ? 'accordian__caption--open' : '' }`}>
                        {block.caption}
                    </div>
                </div>
            })}
        </div>
    </div>;
};

export default Accordian
