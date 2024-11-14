'use client'

import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

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
                height: '100vh', // Adjust as needed
                overflow: 'hidden',
                backgroundImage: 'url(/parallax1-bg.png)'
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
                    backgroundImage: 'url(/parallax1-clouds.png)', // Replace with your image path
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
                    backgroundImage: 'url(/parallax1-lighthouse.png)', // Replace with your image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div
                data-depth-x="0.4"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/parallax1-waves-back.png)', // Replace with your image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div
                data-depth="0.6"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/parallax1-boat.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div
                data-depth-x="1.0"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '112%',
                    height: '100%',
                    transform: 'translateX(-300px)',
                    backgroundImage: 'url(/parallax1-waves-front.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
        </div>
    )
}
