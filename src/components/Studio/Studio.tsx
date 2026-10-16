import { site } from '../../data/site'
import styles from './Studio.module.css'

const studioPhotos = [
  {
    src: '/images/studio-main.jpg',
    alt: 'Просторий студійний зал із бетонними стінами та зеленим фоном',
    ratio: '4 / 5',
    className: styles.large,
  },
  {
    src: '/images/studio-detail-1.jpg',
    alt: 'Порожня студія з великим вікном і дерев’яною стелею',
    ratio: '1 / 1',
    className: styles.small,
  },
  {
    src: '/images/studio-detail-2.jpg',
    alt: 'Мінімалістична світла студія зі стільцем і софітом',
    ratio: '1 / 1',
    className: styles.small,
  },
  {
    src: '/images/studio-space.jpg',
    alt: 'Жінка позує у світлій мінімалістичній кімнаті',
    ratio: '16 / 9',
    className: styles.wide,
  },
]

function Studio() {
  return (
    <section id="studio" className={styles.studio} aria-labelledby="studio-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.intro}>
            <p className="eyebrow">03 — Студія</p>
            <h2 id="studio-title" className={styles.title}>
              Простір із <em>природним світлом</em>
            </h2>
          </div>

          <div className={styles.aside}>
            <p className={styles.text}>
              Сучасні зони, різні фони та професійне обладнання. Ідеальне місце для
              ваших творчих ідей.
            </p>
            <a
              href={site.instagramUrl}
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Дізнатись більше
              <span className="visually-hidden"> в Instagram (нова вкладка)</span>
            </a>
          </div>
        </header>

        <ul className={styles.gallery}>
          {studioPhotos.map((photo) => (
            <li key={photo.src} className={photo.className}>
              <div className={styles.frame} style={{ aspectRatio: photo.ratio }}>
                <img
                  className="photo"
                  src={photo.src}
                  alt={photo.alt}
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

export default Studio
