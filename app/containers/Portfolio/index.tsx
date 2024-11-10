import Card from '@/app/components/card'
import styles from './portfolio.module.css'

import pf01 from '../../assets/pf01.webp'
import pf02 from '../../assets/pf02.webp'
import pf03 from '../../assets/pf03.webp'
import pf04 from '../../assets/pf04.webp'
import pf05 from '../../assets/pf05.webp'
import pf06 from '../../assets/pf06.webp'
import pf07 from '../../assets/pf07.webp'
import pf08 from '../../assets/pf08.webp'

export default function Portfolio() {

    const cardsData = [
        { title: "Digital illustration", img: pf01, effect: 'tilt1', color: '#1b3475' },
        { title: "Animal Symbology Project", img: pf02, effect: 'tilt2', color: '#75ab49' },
        { title: "Animation", img: pf03, effect: 'tilt1', color: '#a7cf94' },
        { title: "Book illustration", img: pf04, effect: 'tilt2', color: '#aa9788' },
        { title: "Character design", img: pf05, effect: 'tilt2', color: '#6d6c6a' },
        { title: "Custom products", img: pf06, effect: 'tilt1', color: '#f56886' },
        { title: "Graphic design", img: pf07, effect: 'tilt2', color: '#c59f4d' },
        { title: "Music", img: pf08, effect: 'tilt1', color: '#947559' }
    ]

    return (
        <section className={styles.portfolioContainer}>
            <div className={styles.portfolioCenter}>
                <ul className={styles.cardsList}>
                    {cardsData.map(({title, img, effect, color}, index) => (
                        <li key={index}>
                            <Card title={title} img={img} effect={effect} color={color} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
