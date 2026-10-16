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
          <p className="eyebrow">01 — Портфоліо</p>
          <h2 id="portfolio-title" className={styles.title}>
            Кадри, де <em>світло</em> говорить першим
          </h2>
          <p className={styles.subtitle}>
            Добірка знімків студії: м’яке денне світло, тканини та спокійні кольори.
          </p>
        </header>

        <ul className={styles.grid}>
          {portfolio.map((item) => (
            <li key={item.id} className={styles[item.size]}>
              <div className={styles.frame} style={{ aspectRatio: ratioBySize[item.size] }}>
                <img
                  className="photo"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={1200}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
