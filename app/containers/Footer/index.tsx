import styles from './footer.module.css'

import footerImg from '../../assets/small-whale-invert.webp'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image className={styles.footerImg} src={footerImg} alt='Flying whale illustration' />
            <p>© {new Date().getFullYear()} VFO Studio • by Victor Freire Oliveira</p>
            <p>All rights reserved</p>
            <a href="https://github.com/oliveira-victor" target='_blank'>github.com/oliveira-victor</a>
        </footer>
    )
}
