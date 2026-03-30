import styles from './TechStack.module.css'

const stack = [
  { name: 'Flutter',    icon: '💙' },
  { name: 'Node.js',   icon: '🟢' },
  { name: 'MongoDB',   icon: '🍃' },
  { name: 'JWT',       icon: '🔑' },
  { name: 'EmailAPI',  icon: '📧' },
  { name: 'JWT Auth',  icon: '🔐' },
  { name: 'Express',   icon: '⚡' },
]

export default function TechStack() {
  return (
    <section className={styles.section} id="tech">
      <div className={styles.container}>
        <h2 className={styles.heading}>Powered By</h2>
        <div className={styles.track}>
          {[...stack, ...stack].map((t, i) => (
            <div key={i} className={styles.pill}>
              <span>{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
