import styles from './Vision.module.css'

export default function Vision() {
  return (
    <section className={styles.section} id="vision">
      <div className={styles.container}>
        <div className={styles.eyeWrap} aria-hidden="true">
          <div className={styles.eye}>
            <div className={styles.pupil} />
          </div>
        </div>

        <h2 className={styles.heading}>
          Our vision is to revolutionize<br />healthcare donation systems.
        </h2>

        <blockquote className={styles.quote}>
          "LifeLink aims to reduce response time and increase survival rates through intelligent
          automation, making donation faster, smarter, and accessible to everyone."
        </blockquote>

        <div className={styles.stats}>
          {[
            { val: '99.9%', label: 'System Reliability' },
            { val: '< 2ms', label: 'Matching Latency' },
            { val: 'AI',    label: 'Decision Logic' },
          ].map(({ val, label }) => (
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
