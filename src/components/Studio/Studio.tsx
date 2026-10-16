import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import { site } from '../../data/site'
import styles from './Studio.module.css'

const studioPhotos = [
  { label: 'Заглушка: великий зал студії', ratio: '4 / 5', className: styles.large },
  { label: 'Заглушка: зона з софітом', ratio: '1 / 1', className: styles.small },
  { label: 'Заглушка: кутова зона з кріслом', ratio: '1 / 1', className: styles.small },
  { label: 'Заглушка: декор і рослини', ratio: '4 / 3', className: styles.wide },
]

function Studio() {
  return (
    <section id="studio" className={styles.studio} aria-labelledby="studio-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 id="studio-title" className={styles.title}>
            Наша <em>студія</em>
          </h2>
          <p className={styles.text}>
            Сучасний простір із природним світлом, різними зонами та професійним
            обладнанням. Ідеальне місце для ваших творчих ідей.
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

        <ul className={styles.gallery}>
          {studioPhotos.map((photo) => (
            <li key={photo.label} className={photo.className}>
              <ImagePlaceholder label={photo.label} ratio={photo.ratio} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Studio
