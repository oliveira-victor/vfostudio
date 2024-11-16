'use client'

import PaperBoat from '@/app/parallax/PaperBoat'
import styles from './hero.module.css'
import Title from '@/app/components/Title'
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
            <div className={`${styles.mobileTitle} fadeIn`}>
                <Title />
            </div>
            <menu className={styles.heroMenu}>
                <Title />
                <ul className={styles.heroList}>
                    <li>
                        <button onClick={scrollDown} className={styles.heroBtn} type="button">Services</button>
                    </li>
                    <li>
                        <button className={styles.heroBtn} type="button">Portfolio</button>
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
            <div className={styles.paperBar}>
                <img src="./paper.webp" alt="Piece of paper" />
                <div className={styles.paperExtension}></div>
            </div>
        </div>
    )
}
