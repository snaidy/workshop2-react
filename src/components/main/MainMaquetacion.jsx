import React, { useEffect, useState } from 'react';
import './mainMaquetacion.scss';
import interactiveMovile from '../../assets/mobile/image-interactive.jpg';
import deepEarthMovile from '../../assets/mobile/image-deep-earth.jpg';
import nightArcadeMovile from '../../assets/mobile/image-night-arcade.jpg';
import soccerMovile from '../../assets/mobile/image-soccer-team.jpg';
import gridMovile from '../../assets/mobile/image-grid.jpg';
import aboveMovile from '../../assets/mobile/image-from-above.jpg';
import pocketMovile from '../../assets/mobile/image-pocket-borealis.jpg';
import curiosityMovile from '../../assets/mobile/image-curiosity.jpg';
import fisheyeMovile from '../../assets/mobile/image-fisheye.jpg';
import CardImage from '../cardImage/CardImage.jsx';
import interactiveDesktop from '../../assets/desktop/image-interactive.jpg';
import deepDesktop from '../../assets/desktop/image-deep-earth.jpg';
import nightDesktop from '../../assets/desktop/image-night-arcade.jpg';
import soccerDestokp from '../../assets/desktop/image-soccer-team.jpg';
import gridDesktop from '../../assets/desktop/image-grid.jpg';
import aboveDesktop from '../../assets/desktop/image-from-above.jpg';
import pocketDesktop from '../../assets/desktop/image-pocket-borealis.jpg';
import curiosityDesktop from '../../assets/desktop/image-curiosity.jpg';
import fisheyeDesktop from '../../assets/desktop/image-fisheye.jpg'
import ImagesDesktop from '../imagesDesktop/ImagesDesktop';

const MainMaquetacion = () => {
    const imagesMovile = [
        {
            id: 1,
            image: deepEarthMovile,
            text1: "DEEP",
            text2: "EARTH"
        },
        {
            id: 2,
            image: nightArcadeMovile,
            text1: "NIGHT",
            text2: "ARCADE"
        },
        {
            id: 3,
            image: soccerMovile,
            text1: "SOCCER",
            text2: "TEAM VR"
        },
        {
            id: 4,
            image: gridMovile,
            text1: "THE",
            text2: "GRID"
        },
        {
            id: 5,
            image: aboveMovile,
            text1: "FROM UP",
            text2: "ABOVE VR"
        },
        {
            id: 6,
            image: pocketMovile,
            text1: "POCKET",
            text2: "BOREALIS"
        },
        {
            id: 7,
            image: curiosityMovile,
            text1: "THE",
            text2: "CURIOSITY"
        },
        {
            id: 8,
            image: fisheyeMovile,
            text1: "MAKE IT",
            text2: "FISHEYE"
        }
    ];
    const imageDesktop = [
        {
            id: 1,
            image: deepDesktop,
            text1: "DEEP",
            text2: "EARTH"
        },
        {
            id: 2,
            image: nightDesktop,
            text1: "NIGHT",
            text2: "ARCADE"
        },
        {
            id: 3,
            image: soccerDestokp,
            text1: "SOCCER",
            text2: "TEAM VR"
        },
        {
            id: 4,
            image: gridDesktop,
            text1: "THE",
            text2: "GRID"
        },
        {
            id: 5,
            image: aboveDesktop,
            text1: "FROM UP",
            text2: "ABOVE VR"
        },
        {
            id: 6,
            image: pocketDesktop,
            text1: "POCKET",
            text2: "BOREALIS"
        },
        {
            id: 7,
            image: curiosityDesktop,
            text1: "THE",
            text2: "CURIOSITY"
        },
        {
            id: 8,
            image: fisheyeDesktop,
            text1: "MAKE IT",
            text2: "FISHEYE"
        }
    ];
    const [widthMovile, setWidthMovile] = useState();
    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 885) {
            setWidthMovile(true);
        } else {
            setWidthMovile(false);
        }
    }

    return (
        <>
            {widthMovile ? (
                <main className='main'>
                    <figure className='main__interactive-figure'>
                        <img src={interactiveMovile} />
                    </figure>
                    <section className='main__parrafo'>
                        <h2>THE LEADER IN INTERACTIVE VR</h2>
                        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                    </section>
                    <section className='main__container'>
                        <h2>OUR CREATIONS</h2>
                        {imagesMovile.map((object) => (
                            <CardImage key={object.id} cards={object} />
                        ))}
                        <span className='main__container-button'>SEE ALL</span>
                    </section>
                </main>
            ) : (
                <main className='main-desktop'>
                    <article className='main-desktop__container'>
                    <figure className='main-desktop__figure'>
                        <img src={interactiveDesktop} />
                    </figure>
                    <div className='main-desktop__parrafo'>
                        <h2>THE LEADER IN INTERACTIVE VR</h2>
                        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                    </div>
                    </article>
                    <section className='main-desktop__menu'>
                        <h2>OUR CREATIONS</h2>
                        <span className='main-desktop__menu__btn'>SEE ALL</span>
                    </section>
                    <section className='main-desktop__figures'>
                        {imageDesktop.map((object) => (
                            <ImagesDesktop key={object.id} card={object}/>
                        ))}
                    </section>
                </main>
            )}
        </>
    )
}

export default MainMaquetacion;