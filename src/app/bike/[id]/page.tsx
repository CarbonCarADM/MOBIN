"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

// Dados das bikes
const bikes = {
  'himiway-cruiser': {
    name: 'Himiway Cruiser',
    brand: 'Himiway',
    category: 'INVENTORY - E-BIKE - PERFORMANCE ICON',
    price: '8.990',
    year: '2023',
    bodyType: 'Cruiser',
    model: 'Cruiser Pro',
    fuelType: 'Elétrica',
    previousOwners: '0',
    mileage: '0',
    description: 'A Himiway Cruiser é uma obra-prima naturalmente inspirada, projetada para domínio em trilhas e precisão em estrada. Com tecnologia derivada do ciclismo profissional, aerodinâmica agressiva e experiência de condução purista, esta é a definitiva e-bike do condutor.',
    images: [
      'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&h=800&fit=crop',
    ],
    specs: {
      'Quilometragem máxima': 'Até 80km',
      'Velocidade máxima': '45 km/h',
      'Carga máxima': '180kg',
      'Nível de Proteção contra Água': 'IP65',
      'Tamanho do pneu': '20" x 4"',
      'Tensão nominal da bateria': '48V',
      'Voltagem de entrada de carga': '100-240V',
      'Capacidade da bateria': '17.5Ah',
      'Suspensão': 'Suspensão Dianteira',
      'Freio': 'Freios Hidráulicos',
      'Engrenagem de velocidade': 'Shimano 7 Velocidades',
      'Potência do Motor': '750W',
    },
  },
  'ado-a20f': {
    name: 'ADO A20F',
    brand: 'ADO',
    category: 'INVENTORY - E-BIKE - URBAN COMPACT',
    price: '4.990',
    year: '2024',
    bodyType: 'Dobrável',
    model: 'A20F Plus',
    fuelType: 'Elétrica',
    previousOwners: '0',
    mileage: '0',
    description: 'A ADO A20F é a solução perfeita para mobilidade urbana. Compacta, dobrável e com design minimalista, esta e-bike combina praticidade com tecnologia avançada para o dia a dia na cidade.',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=800&fit=crop',
    ],
    specs: {
      'Quilometragem máxima': 'Até 50km',
      'Velocidade máxima': '25 km/h',
      'Carga máxima': '120kg',
      'Nível de Proteção contra Água': 'IP54',
      'Tamanho do pneu': '20" x 2.5"',
      'Tensão nominal da bateria': '36V',
      'Voltagem de entrada de carga': '100-240V',
      'Capacidade da bateria': '10.4Ah',
      'Suspensão': 'Sem Suspensão',
      'Freio': 'Freios a Disco Mecânicos',
      'Engrenagem de velocidade': 'Shimano 6 Velocidades',
      'Potência do Motor': '350W',
    },
  },
};

export default function BikeDetailPage() {
  const params = useParams();
  const bikeId = params.id as string;
  const bike = bikes[bikeId as keyof typeof bikes];
  const [currentImage, setCurrentImage] = useState(0);
  const [specsExpanded, setSpecsExpanded] = useState(true);

  if (!bike) {
    return <div>Bike não encontrada</div>;
  }

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
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>R$ {bike.price}</span>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeIcon}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <span className={styles.badgeValue}>{bike.previousOwners}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery + Specs Section */}
        <section className={styles.detailsSection}>
          <div className={styles.container}>
            <div className={styles.detailsLeft}>
              <div className={styles.galleryMain}>
                <button className={styles.galleryPrev} onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}>
                  ←
                </button>
                <img src={bike.images[currentImage]} alt={`${bike.name} - ${currentImage + 1}`} />
                <button className={styles.galleryNext} onClick={() => setCurrentImage(Math.min(bike.images.length - 1, currentImage + 1))}>
                  →
                </button>
                
                <div className={styles.galleryDots}>
                  {bike.images.map((_, i) => (
                    <button 
                      key={i} 
                      className={`${styles.dot} ${i === currentImage ? styles.dotActive : ''}`}
                      onClick={() => setCurrentImage(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.detailsRight}>
              <div className={styles.specsHeader}>
                <span className={styles.specsLabel}>VEHICULE DETAILS</span>
                <h2 className={styles.specsTitle}>Specs</h2>
              </div>

              <div className={styles.specsGrid}>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Price ( $ )</span>
                  <span className={styles.specValue}>{bike.price}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Mileage</span>
                  <span className={styles.specValue}>{bike.specs.mileage}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Year</span>
                  <span className={styles.specValue}>{bike.year}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Body Type</span>
                  <span className={styles.specValue}>{bike.bodyType}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Model</span>
                  <span className={styles.specValue}>{bike.model}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Trim</span>
                  <span className={styles.specValue}>Pro</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Fuel Type</span>
                  <span className={styles.specValue}>{bike.fuelType}</span>
                </div>
                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Previous Owners</span>
                  <span className={styles.specValue}>{bike.previousOwners}</span>
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
              <button 
                className={styles.expandBtn}
                onClick={() => setSpecsExpanded(!specsExpanded)}
                aria-label={specsExpanded ? "Fechar especificações" : "Abrir especificações"}
              >
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
                    <span className={styles.fullSpecLabel}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
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
