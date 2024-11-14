'use client'

import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

export default function FlyingWhale() {
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
                backgroundImage: 'url(/parallax2-layer-bg.webp)'
            }}
        >
            <div
                data-depth="0.2"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img src="./parallax2-layer1.webp" alt="" /></div>
            <div
                data-depth="0.4"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/parallax2-layer2.webp)', // Replace with your image path
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
                    backgroundImage: 'url(/parallax2-layer3.webp)', // Replace with your image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div
                data-depth="0.8"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/parallax2-layer4.webp)', // Replace with your image path
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
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img style={{transform: 'translateX(-200px)'}} src="./parallax2-layer5.webp" alt="" /></div>
            <div
                data-depth-x="1.2"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '112%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img style={{transform: 'translateY(-88px)', float: 'right'}} src="./parallax2-layer6.webp" alt="" /></div>
        </div>
    )
}
