import Link from 'next/link';
import BikeCard from './BikeCard';
import styles from './FeaturedSection.module.css';

const bikes = [
  {
    id: 'himiway-cruiser',
    name: 'Himiway Escape Pro',
    year: '2024',
    price: 'R$18.990',
    image: '/hero-bike.jpg',
  },
  {
    id: 'himiway-cruiser',
    name: 'Himiway Cruiser',
    year: '2023',
    price: 'R$22.500',
    tag: 'Performance',
    image: '/hero-bike.jpg',
  },
  {
    id: 'himiway-cruiser',
    name: 'Himiway Zebra',
    year: '2024',
    price: 'R$26.900',
    tag: 'Novo',
    image: '/hero-bike.jpg',
  },
  {
    id: 'ado-a20f',
    name: 'Himiway Rambler',
    year: '2024',
    price: 'R$31.500',
    tag: 'Premium',
    image: '/hero-bike.jpg',
  },
  {
    id: 'ado-a20f',
    name: 'Himiway Cobra',
    year: '2024',
    price: 'R$34.900',
    image: '/hero-bike.jpg',
  },
  {
    id: 'ado-a20f',
    name: 'Himiway Big Dog',
    year: '2023',
    price: 'R$28.700',
    tag: 'Off-Road',
    image: '/hero-bike.jpg',
  },
];

export default function FeaturedSection() {
  return (
    <section className={styles.section} id="catalogo">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.label}>BIKES EM DESTAQUE</span>
          <h2 className={styles.title}>
            Performance<br />Meets Prestige
          </h2>
        </div>
        <div className={styles.headerRight}>
          <Link href="#catalogo" className={styles.browseBtn}>
            Ver catálogo
            <span className={styles.browseBtnArrow}>→</span>
          </Link>
          <p className={styles.desc}>
            Selecionadas do nosso catálogo. Cada uma representa o auge da tecnologia em bikes elétricas.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {bikes.map((bike) => (
          <BikeCard key={bike.name} {...bike} />
        ))}
      </div>
    </section>
  );
}
