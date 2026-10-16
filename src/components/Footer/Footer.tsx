import { site } from '../../data/site'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.logo}>Solène</p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {site.name}. Усі права захищено.
        </p>
      </div>
    </footer>
  )
}

export default Footer
