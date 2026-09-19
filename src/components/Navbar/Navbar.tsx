'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Catálogo', href: '/#catalogo' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Contato', href: '/#contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>MOBIN</Link>

        <span className={styles.divider} />

        <ul className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
            </li>
          ))}
          <li className={styles.ctaMobile}>
            <a
              href="https://wa.me/5527999999999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Fale Conosco
              <span className={styles.ctaMobileArrow}>→</span>
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/5527999999999"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          onClick={closeMenu}
        >
          Fale Conosco
          <span className={styles.ctaArrow}>→</span>
        </a>

        <button 
          className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
        </button>
      </nav>
    </div>
  );
}
