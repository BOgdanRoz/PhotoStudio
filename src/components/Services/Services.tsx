import { services } from '../../data/services'
import { site } from '../../data/site'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">02 — Послуги</p>
          <h2 id="services-title" className={styles.title}>
            Що ми <em>знімаємо</em>
          </h2>
          <p className={styles.note}>Ціни орієнтовні. Точні умови уточнюйте в Instagram.</p>
        </header>

        <ul className={styles.list}>
          {services.map((service, index) => (
            <li key={service.id} className={styles.row}>
              <span className={styles.index} aria-hidden="true">
                0{index + 1}
              </span>

              <div className={styles.text}>
                <h3 className={styles.name}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>

              <p className={styles.price}>{service.price}</p>

              <div className={styles.thumb}>
                <img
                  className="photo"
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={1500}
                />
              </div>
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
