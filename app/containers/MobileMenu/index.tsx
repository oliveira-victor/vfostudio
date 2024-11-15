'use client'

import { useEffect, useState } from 'react'

import styles from './mobilemenu.module.css'

function useScrollPosition() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isScrolled
}

export default function MobileMenu() {

    const isScrolled = useScrollPosition()

    return (
        <nav className={`${styles.mobileMenu} ${isScrolled ? styles.showMenuBg : ''}`}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <img className={styles.menuIcon} src='./menu-icon-services.svg' alt="Services icon" />
                    <span className={styles.itemTitle}>Services</span>
                </li>
                <li className={styles.menuItem}>
                    <img className={styles.menuIcon} src='./menu-icon-portfolio.svg' alt="Portfolio icon" />
                    <span className={styles.itemTitle}>Portfolio</span>
                </li>
                <li className={styles.menuItem}>
                    <img className={styles.menuIcon} src='./menu-icon-about.svg' alt="About icon" />
                    <span className={styles.itemTitle}>About</span>
                </li>
                <li className={styles.menuItem}>
                    <img className={styles.menuIcon} src='./menu-icon-contact.svg' alt="Contact icon" />
                    <span className={styles.itemTitle}>Contact</span>
                </li>
                <li className={styles.menuItem}>
                    <img className={styles.menuIcon} src='./menu-icon-link.svg' alt="Links icon" />
                    <span className={styles.itemTitle}>Links</span>
                </li>
            </ul>
        </nav>
    )
}
