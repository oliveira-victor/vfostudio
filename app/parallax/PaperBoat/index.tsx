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
                height: '100vh',
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
                    backgroundImage: 'url(/parallax1-clouds.png)',
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
                    backgroundImage: 'url(/parallax1-lighthouse.png)',
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
            ><img src="/parallax1-waves-back.png" alt="Parallax waves" style={{ transform: 'translate(-200px, -80px)' }} /></div>
            <div
                data-depth="0.7"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    /* backgroundImage: 'url(/parallax1-whale.png)', */
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img className='whale' src="/parallax1-whale.png" alt="Parallax whale" /></div>
            <div
                data-depth="0.8"
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ><img src="/parallax1-waves-front.png" alt="Parallax waves" style={{ transform: 'translate(-200px, -80px)' }} /></div>
        </div>
    )
}
