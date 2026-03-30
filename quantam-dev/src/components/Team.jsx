import styles from './Team.module.css'

const members = [
  { name: 'Munasignha M.D.D', role: 'Full Stack Developer', emoji: '👨‍💻' },
  { name: 'Perera V.P.K.M',   role: 'AI Engineer',          emoji: '🤖' },
  { name: 'Rashmika M.K',     role: 'Backend Developer',    emoji: '👩‍💻' },
  { name: 'Kaushal K.A.B',    role: 'Mobile App Developer', emoji: '📱' },
]

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Architects of Tomorrow</h2>
          <div className={styles.rule} />
        </div>
        <div className={styles.grid}>
          {members.map((m, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.avatar}>
                <span className={styles.emoji}>{m.emoji}</span>
              </div>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
              <div className={styles.socials}>
                <a href="#" className={styles.social} aria-label="GitHub">⬛</a>
                <a href="#" className={styles.social} aria-label="Share">🔗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
