'use client'

import PaperBoat from '@/app/parallax/PaperBoat'
import styles from './hero.module.css'
/* import FlyingWhale from '@/app/parallax/FlyingWhale' */

export default function Hero() {

    /* const parallaxArts = [
        { art: <PaperBoat /> },
        { art: <FlyingWhale /> }
    ]

    const getRandomParallax = (data: any) => {
        const dataLength = data.length;
        const randomNumber = Math.floor(Math.random() * dataLength);
        
        return data[randomNumber].art
    } */

    function scrollDown() {
        window.scrollBy(0, window.innerHeight)
    }

    return (
        <div className={styles.heroContainer}>
            <menu className={styles.heroMenu}>
                <h1>
                    <img className={styles.vfoLogo} src="./vfo-logo.svg" alt="VFO Studio - by Victor Freire Oliveira" />
                </h1>
                <span className={styles.author}>by Victor Freire Oliveira</span>
                <ul className={styles.heroList}>
                    <li>
                        <button onClick={scrollDown} className={styles.heroBtn} type="button">Portfolio</button>
                    </li>
                    <li>
                        <button className={styles.heroBtn} type="button">Services</button>
                    </li>
                    <li>
                        <button className={styles.heroBtn} type="button">About</button>
                    </li>
                    <li>
                        <button className={styles.heroBtn} type="button">Contact</button>
                    </li>
                    <li>
                        <button className={styles.heroBtn} type="button">Links</button>
                    </li>
                </ul>
                <div className={styles.langContainer}>
                    <button type="button" className={styles.langBtn}><img src="./icon-uk.svg" alt="English language icon" /></button>
                    <button type="button" className={styles.langBtn}><img src="./icon-br.svg" alt="Portuguese language icon" /></button>
                </div>
            </menu>
            <PaperBoat />
            <img className={styles.paper} src="./paper.webp" alt="Piece of paper" />
        </div>
    )
}
