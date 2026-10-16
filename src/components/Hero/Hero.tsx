import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import { site } from '../../data/site'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{site.description}</p>
          <h1 id="hero-title" className={styles.title}>
            Фотостудія для <em>справжніх</em> історій
          </h1>
          <p className={styles.lead}>
            Простір для творчості, світла та ваших особливих моментів.
          </p>

          <div className={styles.actions}>
            <a
              href={site.instagramUrl}
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Записатися
              <span className="visually-hidden"> в Instagram (нова вкладка)</span>
            </a>
            <a href="#portfolio" className={styles.secondary}>
              Дивитись портфоліо <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <ImagePlaceholder label="Заглушка: головне фото студії" ratio="4 / 5" />
        </div>
      </div>
    </section>
  )
}

export default Hero
