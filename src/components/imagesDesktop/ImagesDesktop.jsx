import React from 'react';
import './imagesDesktop.scss'

const ImagesDesktop = ({card}) => {
    return (
        <>
            <figure className='figure'>
                <img src={card.image} />
                <figcaption className='figure__caption'>{card.text1}</figcaption>
                <figcaption className='figure__caption2'>{card.text2}</figcaption>
            </figure>
        </>
    )
}

export default ImagesDesktop