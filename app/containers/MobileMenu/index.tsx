import styles from './mobilemenu.module.css'

export default function MobileMenu() {
    return(
        <nav className={styles.mobileMenu}>
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
