import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.media}>
          <div className={styles.primary}>
            <img
              className="photo"
              src="/images/about-main.jpg"
              alt="Портрет жінки в фактурному жакеті при різкому світлі"
              loading="lazy"
              width={1200}
              height={1500}
            />
          </div>
          <div className={styles.secondary}>
            <img
              className="photo"
              src="/images/about-detail.jpg"
              alt="Жінка в рожевому жакеті на темному фоні"
              loading="lazy"
              width={1200}
              height={1500}
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className="eyebrow">04 — Про нас</p>
          <h2 id="about-title" className={styles.title}>
            Більше, ніж <em>просто фотостудія.</em>
          </h2>
          <p className={styles.lead}>
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
