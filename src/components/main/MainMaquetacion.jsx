import React, { useState } from 'react';
import './mainMaquetacion.scss';
import interactiveMovile from '../../assets/mobile/image-interactive.jpg';
import interactiveDesktop from '../../assets/desktop/image-interactive.jpg';
import deepEarthMovile from '../../assets/mobile/image-deep-earth.jpg';
import nightArcadeMovile from '../../assets/mobile/image-night-arcade.jpg';
import soccerMovile from '../../assets/mobile/image-soccer-team.jpg';
import gridMovile from '../../assets/mobile/image-grid.jpg';
import aboveMovile from '../../assets/mobile/image-from-above.jpg';
import pocketMovile from '../../assets/mobile/image-pocket-borealis.jpg';
import curiosityMovile from '../../assets/mobile/image-curiosity.jpg';
import fisheyeMovile from '../../assets/mobile/image-fisheye.jpg';

const MainMaquetacion = () => {
    const [image, setImage] = useState();
    return (
        <>
            <main className='main'>
                <figure className='main__interactive-figure'>
                    <img src={interactiveMovile} />
                    {/* <img src={interactiveDesktop} /> */}
                </figure>
                <section className='main__parrafo'>
                    <h2>THE LEADER IN INTERACTIVE VR</h2>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </section>
                <section className='main__container'>
                <h2>OUR CREATIONS</h2>
                <figure className='main__container-figure'>
                    <img src={deepEarthMovile} />
                    <figcaption>DEEP EARTH</figcaption>
                </figure>
                <figure className='main__container-figure'>
                    <img src={nightArcadeMovile} />
                    <figcaption>NIGHT ARCADE</figcaption>
                </figure>
                <figure className='main__container-figure'>
                    <img src={soccerMovile} />
                    <figcaption>SOCCER TEAM VR</figcaption>
                </figure>
                <figure className='main__container-figure'>
                    <img src={gridMovile} />
                    <figcaption>THE GRID</figcaption>
                </figure>
                <figure className='main__container-figure'>
                    <img src={aboveMovile} />
                    <figcaption>FROM UP ABOVE VR</figcaption>
                </figure>
                <figure className='main__container-figure'>
                    <img src={pocketMovile} />
                    <figcaption>POCKET BOREALIS</figcaption>
                </figure>
                <figure className='main__container-figure'>
                    <img src={curiosityMovile} />
                    <figcaption>THE CURIOSITY</figcaption>
                </figure> 
                <figure className='main__container-figure'>
                    <img src={fisheyeMovile} />
                    <figcaption>MAKE IT FISHEYE</figcaption>
                </figure>
                <span>SEE ALL</span>
                </section> 
            </main>
        </>
    )
}

export default MainMaquetacion;