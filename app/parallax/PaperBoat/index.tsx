'use client'

import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

import styles from './paperboat.module.css'

export default function PaperBoat() {
    const parallaxContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (parallaxContainerRef.current) {
            const parallaxInstance = new Parallax(parallaxContainerRef.current)
            return () => parallaxInstance.destroy()
        }
    }, [])

    return (
        <div
            ref={parallaxContainerRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                backgroundImage: 'url(/parallax1-bg.webp)'
            }}
        >
            <div
                data-depth="0.1"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/parallax1-clouds.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div
                data-depth="0.2"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/parallax1-lighthouse.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div
                data-depth="0.4"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '112%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img className={styles.waveBack} src="/parallax1-waves-back.webp" alt="Parallax waves" /></div>
            <div
                data-depth="0.7"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img className={styles.whale} src="/parallax1-whale.webp" alt="Parallax whale" /></div>
            <div
                data-depth="0.8"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img className={styles.float} src="/parallax1-boat.webp" alt="Parallax boat" /></div>
            <div
                data-depth-x="1.0"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '112%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img className={styles.waveFront} src="/parallax1-waves-front.webp" alt="Parallax waves" /></div>
        </div>
    )
}
