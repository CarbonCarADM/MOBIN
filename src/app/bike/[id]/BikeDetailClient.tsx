'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import type { Bike } from '@/lib/data';

export default function BikeDetailClient({ bike }: { bike: Bike }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [specsExpanded, setSpecsExpanded] = useState(true);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroLeft}>
              <span className={styles.category}>{bike.category}</span>
              <h1 className={styles.heroTitle}>{bike.name}</h1>
              <p className={styles.heroDesc}>{bike.description}</p>
              <button className={styles.contactBtn}>
                Falar com Vendas
                <span className={styles.btnArrow}>→</span>
              </button>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroImage}>
                <img src={bike.images[0]} alt={bike.name} />
                <div className={styles.heroBadges}>
                  <div className={styles.badge}>
                    <div className={styles.badgeIcon}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>R$ {bike.price}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeIcon}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>{bike.year}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeIcon}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <circle cx="12" cy="12" r="2"/>
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>{bike.bodyType}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeIcon}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>{bike.fuelType}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeIcon}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>{bike.previousOwners}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.detailsSection}>
          <div className={styles.container}>
            <div className={styles.detailsLeft}>
              <div className={styles.galleryHeader}>
                <h3 className={styles.galleryTitle}>{bike.name} em Detalhes</h3>
              </div>
              <div className={styles.galleryContainer}>
                <div className={styles.galleryMain}>
                  <button className={styles.galleryPrev} onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}>←</button>
                  <img src={bike.images[currentImage]} alt={`${bike.name} - ${currentImage + 1}`} />
                  <button className={styles.galleryNext} onClick={() => setCurrentImage(Math.min(bike.images.length - 1, currentImage + 1))}>→</button>
                  <div className={styles.galleryDots}>
                    {bike.images.map((_, i) => (
                      <button key={i} className={`${styles.dot} ${i === currentImage ? styles.dotActive : ''}`} onClick={() => setCurrentImage(i)} />
                    ))}
                  </div>
                </div>

                <div className={styles.galleryThumbnails}>
                  {bike.images.map((image, i) => (
                    <button key={i} className={`${styles.thumbnail} ${i === currentImage ? styles.thumbnailActive : ''}`} onClick={() => setCurrentImage(i)} aria-label={`Ver imagem ${i + 1}`}>
                      <img src={image} alt={`Miniatura ${i + 1}`} />
                    </button>
                  ))}
                </div>

                <div className={styles.gallerySidebar}>
                  <div className={styles.sidebarSection}>
                    <h4 className={styles.sidebarTitle}>Características</h4>
                    <div className={styles.sidebarSpecs}>
                      {[
                        { label: 'Velocidade', key: 'Velocidade máxima' },
                        { label: 'Autonomia',  key: 'Quilometragem máxima' },
                        { label: 'Potência',   key: 'Potência do Motor' },
                        { label: 'Bateria',    key: 'Capacidade da bateria' },
                      ].map(({ label, key }) => (
                        <div key={key} className={styles.sidebarSpec}>
                          <span className={styles.sidebarLabel}>{label}</span>
                          <span className={styles.sidebarValue}>{bike.specs[key] ?? '—'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.sidebarSection}>
                    <h4 className={styles.sidebarTitle}>Especificações</h4>
                    <div className={styles.sidebarSpecs}>
                      {[
                        { label: 'Tipo',   value: bike.bodyType },
                        { label: 'Modelo', value: bike.model },
                        { label: 'Ano',    value: bike.year },
                        { label: 'Pneu',   value: bike.specs['Tamanho do pneu'] ?? '—' },
                      ].map(({ label, value }) => (
                        <div key={label} className={styles.sidebarSpec}>
                          <span className={styles.sidebarLabel}>{label}</span>
                          <span className={styles.sidebarValue}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Specifications */}
        <section className={styles.fullSpecsSection}>
          <div className={styles.container}>
            <div className={styles.fullSpecsHeader}>
              <h3 className={styles.fullSpecsTitle}>Especificações</h3>
              <button className={styles.expandBtn} onClick={() => setSpecsExpanded(!specsExpanded)} aria-label={specsExpanded ? 'Fechar' : 'Abrir'}>
                {specsExpanded ? '−' : '≡'}
              </button>
            </div>
            {specsExpanded && (
              <motion.div
                className={styles.fullSpecsList}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className={styles.fullSpecRow}>
                    <span className={styles.fullSpecLabel}>{key}</span>
                    <span className={styles.fullSpecValue}>{value}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Pronto para Experimentar<br />a E-Bike dos Seus Sonhos?</h2>
            <p className={styles.ctaSubtitle}>Agende um test drive e sinta o que verdadeira performance significa. Todas as bikes disponíveis para visualização imediata.</p>
            <button className={styles.ctaBtn}>
              Agendar Test Drive
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
