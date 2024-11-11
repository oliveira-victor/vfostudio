'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import styles from './card.module.css'

type Props = {
    title: string
    img: StaticImageData
    effect: string
    color: string
}

export default function Card({ title, img, effect, color }: Props) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [moveCard, setMoveCard] = useState(false)

    const handleTitleLength = (name: string) => {
        if (name.length >= 22) {
            return '16px'
        }
        return '22px'
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setMoveCard(true)
            } else {
                setMoveCard(false)
            }
        }, { threshold: [1] })

        const currentRef = cardRef.current

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    const mobileCardMovement = () => {
        return moveCard ? 'straightenCard' : ''
    }

    return (
        <div ref={cardRef} className={`${styles.cardContainer} ${effect} ${mobileCardMovement()}`}>
            <div className={styles.cardTop}>
                <Image className={styles.cardImg} src={img} alt={`Image cover for ${title}`} />
            </div>
            <div style={{fontSize: handleTitleLength(title)}} className={styles.cardBottom}>
                <h2 style={{color: color}}>{title}</h2>
            </div>
        </div>
    )
}
