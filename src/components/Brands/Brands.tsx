'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Brands.module.css';

const brands = [
  { name: 'OUXI',    src: '/brands/ouxi.svg',   width: 100, height: 32 },
  { name: 'Himiway', src: '/brands/himiway.svg', width: 120, height: 32 },
  { name: 'ADO',     src: '/brands/ADO.webp',    width: 120,  height: 48 },
  { name: 'Fiido',   src: '/brands/Fiido.webp',  width: 90,  height: 32 },
];

export default function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Carrossel automático no mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Marcas que trabalhamos</h2>
      <p className={styles.subtitle}>Curadoria das melhores marcas de bikes elétricas do mundo</p>

      {isMobile ? (
        // Mobile: Carrossel
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`${styles.carouselSlide} ${
                  index === currentIndex ? styles.active : ''
                }`}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  style={{ objectFit: 'contain', maxHeight: '32px', width: 'auto', height: 'auto' }}
                  priority={index === currentIndex}
                />
              </div>
            ))}
          </div>

          {/* Dots indicadores */}
          <div className={styles.dots}>
            {brands.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para marca ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop: Layout original
        <div className={styles.track}>
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />

          <div className={styles.logos}>
            {brands.map((brand) => (
              <div key={brand.name} className={styles.logo} title={brand.name}>
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  style={{ objectFit: 'contain', maxHeight: '48px', width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
