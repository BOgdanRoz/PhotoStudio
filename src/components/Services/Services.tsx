import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import { services } from '../../data/services'
import { site } from '../../data/site'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="services-title" className={styles.title}>
            Послуги
          </h2>
          <p className={styles.note}>
            Ціни орієнтовні. Точні умови уточнюйте в Instagram.
          </p>
        </header>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.id} className={styles.card}>
              <ImagePlaceholder label={service.image} ratio="4 / 5" />
              <h3 className={styles.name}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <p className={styles.price}>{service.price}</p>
            </li>
          ))}
        </ul>

        <a
          href={site.instagramUrl}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Уточнити деталі в Instagram
          <span className="visually-hidden"> (нова вкладка)</span>
        </a>
      </div>
    </section>
  )
}

export default Services
