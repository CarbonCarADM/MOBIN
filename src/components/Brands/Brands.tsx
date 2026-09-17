import Image from 'next/image';
import styles from './Brands.module.css';

const brands = [
  { name: 'OUXI',    src: '/brands/ouxi.svg',   width: 100, height: 32 },
  { name: 'Himiway', src: '/brands/himiway.svg', width: 120, height: 32 },
  { name: 'ADO',     src: '/brands/ADO.webp',    width: 120,  height: 48 },
  { name: 'Fiido',   src: '/brands/Fiido.webp',  width: 90,  height: 32 },
];

export default function Brands() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Marcas que trabalhamos</h2>
      <p className={styles.subtitle}>Curadoria das melhores marcas de bikes elétricas do mundo</p>

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
    </section>
  );
}
