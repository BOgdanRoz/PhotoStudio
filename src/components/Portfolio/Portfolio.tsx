import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import { portfolio, type PortfolioSize } from '../../data/portfolio'
import styles from './Portfolio.module.css'

const ratioBySize: Record<PortfolioSize, string> = {
  tall: '3 / 4',
  square: '1 / 1',
  wide: '16 / 10',
}

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio} aria-labelledby="portfolio-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="portfolio-title" className={styles.title}>
            Портфоліо
          </h2>
          <p className={styles.subtitle}>Світло, форма та справжні емоції в кожному кадрі.</p>
        </header>

        <ul className={styles.grid}>
          {portfolio.map((item) => (
            <li key={item.id} className={styles[item.size]}>
              <ImagePlaceholder label={item.alt} ratio={ratioBySize[item.size]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
