import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.media}>
          <ImagePlaceholder
            label="Заглушка: портрет для розділу про студію"
            ratio="4 / 5"
            className={styles.primaryImage}
          />
          <ImagePlaceholder
            label="Заглушка: деталь кадру"
            ratio="4 / 3"
            className={styles.secondaryImage}
          />
        </div>

        <div className={styles.content}>
          <h2 id="about-title" className={styles.title}>
            Більше, ніж <em>просто фотостудія.</em>
          </h2>
          <p className={styles.text}>
            Solène — це простір, де естетика, світло та люди зустрічаються, щоб
            створювати справжні історії.
          </p>
          <p className={styles.text}>
            Ми цінуємо природність, щирість і красу в деталях. Кожна зйомка
            починається з розмови про те, що для вас важливо.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
