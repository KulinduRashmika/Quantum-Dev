import styles from './About.module.css'

const tags = ['AI INTEGRATION','REAL-TIME SYSTEMS','FLUTTER DEV','SECURE BACKEND']

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Precision Engineering for Life</h2>
          <p className={styles.body}>
            Quantam Dev is a passionate team of software engineers specializing in
            AI-driven healthcare solutions. Our mission is to bridge the gap between
            donors and patients using real-time technology, predictive analytics, and
            secure mobile platforms.
          </p>
          <div className={styles.tags}>
            {tags.map(t => (
              <span key={t} className={styles.tag}>
                <span className={styles.tagDot} />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.imgWrap}>
          <div className={styles.imgInner}>
            <div className={styles.imgPlaceholder}>
              <span>🔬</span>
              <p>Medical Research</p>
            </div>
            <div className={styles.cornerAccent} />
          </div>
        </div>
      </div>
    </section>
  )
}
