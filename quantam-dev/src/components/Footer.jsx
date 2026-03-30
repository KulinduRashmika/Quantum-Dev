import styles from './Footer.module.css'

const links = ['GitHub', 'Contact', 'Privacy', 'Terms']

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoDot} />
            Quantam Dev
          </div>
          <p className={styles.copy}>© 2024 Quantam Dev. Molecular Precision.</p>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {links.map(l => (
            <a key={l} href="#" className={styles.link}>{l}</a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>Join Our Mission</a>
      </div>
    </footer>
  )
}
