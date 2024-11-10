import Image, { StaticImageData } from 'next/image'

import styles from './card.module.css'

type Props = {
    title: string
    img: StaticImageData
    effect: string
    color: string
}

export default function Card({ title, img, effect, color }: Props) {

    const handleTitleLength = (name: string) => {
        if (name.length >= 22) {
            return '16px'
        }

        return '22px'
    }

    return (
        <div className={`${styles.cardContainer} ${effect}`}>
            <div className={styles.cardTop}>
                <Image className={styles.cardImg} src={img} alt={`Image cover for ${title}`} />
            </div>
            <div style={{fontSize: handleTitleLength(title)}} className={styles.cardBottom}>
                <h2 style={{color: color}}>{title}</h2>
            </div>
        </div>
    )
}
