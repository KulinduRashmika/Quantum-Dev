import styles from './Features.module.css'

const features = [
  {
    icon: '🧠',
    title: 'AI-Based Organ Health Prediction',
    desc: 'Utilizing deep learning models to assess organ viability and donor compatibility with unprecedented accuracy.',
    tags: ['PREDICTIVE', 'AI CORE'],
    large: true,
  },
  {
    icon: '🔔',
    title: 'Real-Time Alerts',
    desc: 'Instant notification protocols that bypass latency to reach donors when seconds matter most.',
    large: false,
  },
  {
    icon: '📍',
    title: 'GPS Donor Matching',
    desc: 'Proximity-based algorithms connecting the nearest eligible donors to healthcare facilities.',
    large: false,
  },
  {
    icon: '🔐',
    title: 'Secure Auth',
    desc: 'Enterprise-grade security using JWT + BCrypt to ensure medical data remains immutable and private.',
    large: false,
  },
  {
    icon: '🤖',
    title: 'AI Chatbot 24/7',
    desc: 'Automated support for donor onboarding and patient inquiries via intelligent NLU.',
    large: false,
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="lifelink">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.num}>01</span>
          <div>
            <h2 className={styles.heading}>LifeLink Ecosystem</h2>
            <p className={styles.sub}>
              LifeLink is an AI-integrated smart blood and organ donation platform developed to
              solve critical delays in emergency healthcare. The system enables real-time donor
              matching, AI-based organ health prediction, and instant notification alerts.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} ${f.large ? styles.large : ''}`}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              {f.tags && (
                <div className={styles.cardTags}>
                  {f.tags.map(t => <span key={t} className={styles.cardTag}>{t}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
