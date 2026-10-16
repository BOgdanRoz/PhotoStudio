import styles from './SideRails.module.css'

// Decorative edge pattern: hidden from assistive tech and never blocks clicks
function SideRails() {
  return (
    <div className={styles.rails} aria-hidden="true">
      <span className={`${styles.rail} ${styles.left}`} />
      <span className={`${styles.rail} ${styles.right}`} />
    </div>
  )
}

export default SideRails
