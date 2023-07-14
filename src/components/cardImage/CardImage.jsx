import React from 'react';
import './cardImage.scss';

const CardImage = ({cards}) => {

    return (
        <>
            <figure className='figure'>
                <img src={cards.image} />
                <figcaption className='figure__figcaption'>{cards.text1}</figcaption>
                <figcaption className='figure__figcaption2'>{cards.text2}</figcaption>
            </figure>
        </>
    )
}

export default CardImage;