import Link from 'next/link';
import BikeCard from './BikeCard';
import styles from './FeaturedSection.module.css';
import { defaultData } from '@/lib/data';
import { promises as fs } from 'fs';
import path from 'path';
import type { SiteData } from '@/lib/data';

async function getData(): Promise<SiteData> {
  try {
    const file = path.join(process.cwd(), 'src', 'lib', 'site-data.json');
    const raw = await fs.readFile(file, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return defaultData;
  }
}

export default async function FeaturedSection() {
  const data = await getData();
  const bikes = data.bikes;

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
          <BikeCard
            key={bike.id + bike.name}
            id={bike.id}
            name={bike.name}
            year={bike.year}
            price={`R$${bike.price}`}
            tag={bike.tag}
            image={bike.images?.[0] ?? '/hero-bike.webp'}
          />
        ))}
      </div>
    </section>
  );
}
