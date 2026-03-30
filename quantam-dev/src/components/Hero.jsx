import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`${styles.badge} fade-up`}>
          <span className={styles.badgeDot} />
          AI-Powered Healthcare Platform
        </div>

        <h1 className={`${styles.title} fade-up delay-1`}>
          Quantam Dev
        </h1>
        <p className={`${styles.sub} fade-up delay-2`}>CODE THAT SAVES LIVES</p>

        <p className={`${styles.desc} fade-up delay-3`}>
          We are the developers behind <strong>LifeLink</strong> — an AI-powered smart blood &amp;
          organ donation system designed to connect donors and patients in real-time.
        </p>

        <div className={`${styles.actions} fade-up delay-4`}>
          <a href="#lifelink" className={styles.btnPrimary}>
            🔗 Explore LifeLink
          </a>
          <a href="#team" className={styles.btnGhost}>
            👥 Meet Our Team
          </a>
        </div>

        <div className={`${styles.stats} fade-up delay-5`}>
          {[['99.9%','System Reliability'], ['<2ms','Matching Latency'], ['AI','Decision Logic']].map(([val, label]) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statVal}>{val}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
