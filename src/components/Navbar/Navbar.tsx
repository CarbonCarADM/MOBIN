import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Catálogo', href: '/#catalogo' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Contato', href: '/#contato' },
];

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>MOBIN</Link>

        <span className={styles.divider} />

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5527999999999"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Fale Conosco
          <span className={styles.ctaArrow}>→</span>
        </a>
      </nav>
    </div>
  );
}
