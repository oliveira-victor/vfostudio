'use client'

import { useEffect, useState } from 'react'
import styles from './menu.module.css'

function useScrollPosition() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return isScrolled
}

export default function Menu() {

    const isScrolled = useScrollPosition()

    return (
        <nav className={`${styles.menu} ${isScrolled ? styles.showMenu : ''}`}>
            <a href="#">
                <img className={styles.mainLogo} src="./vfo-simple.svg" alt="Logo VFO Studio" />
            </a>
            <ul className={styles.mainMenuList}>
                <li>
                    Services
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Links
                </li>
            </ul>
        </nav>
    )
}
