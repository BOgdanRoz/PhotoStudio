import { useRef, useState, type KeyboardEvent } from 'react'
import { navigation, site } from '../../data/site'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu()
      toggleRef.current?.focus()
    }
  }

  return (
    <header className={styles.header} onKeyDown={handleKeyDown}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={closeMenu}>
          Solène
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Закрити' : 'Меню'}
        </button>

        <nav
          id="site-nav"
          aria-label="Головна навігація"
          className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
        >
          <ul className={styles.list}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.link} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.instagramUrl}
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Записатися
            <span className="visually-hidden"> в Instagram (нова вкладка)</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
