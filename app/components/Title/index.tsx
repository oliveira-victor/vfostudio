import styles from './title.module.css'

export default function Title() {
    return (
        <>
            <h1>
                <img className={styles.vfoLogo} src="./vfo-logo.svg" alt="VFO Studio - by Victor Freire Oliveira" />
            </h1>
            <span className={styles.author}>by Victor Freire Oliveira</span>
        </>
    )
}
