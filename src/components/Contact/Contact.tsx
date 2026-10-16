import { site } from '../../data/site'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 id="contact-title" className={styles.title}>
            Давайте створимо <em>вашу історію.</em>
          </h2>
          <p className={styles.text}>
            Запит на фотосесію, оренду студії або співпрацю — напишіть нам в
            Instagram.
          </p>

          <a
            href={site.instagramUrl}
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написати в Instagram
            <span className="visually-hidden"> (нова вкладка)</span>
          </a>

          <dl className={styles.details}>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Відкрити профіль
                  <span className="visually-hidden"> (нова вкладка)</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>Місто</dt>
              <dd>{site.city}</dd>
            </div>
            <div>
              <dt>Адреса</dt>
              <dd>{site.address}</dd>
            </div>
          </dl>
        </div>

        <div className={`${styles.media} media-zoom`}>
          <img
            className="photo"
            src="/images/contact.jpg"
            alt="Жінка торкається обличчя на темному задимленому фоні"
            loading="lazy"
            width={1200}
            height={1500}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
