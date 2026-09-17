import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedSection.module.css';

interface BikeCardProps {
  id: string;
  name: string;
  year: string;
  price: string;
  tag?: string;
  image: string;
}

export default function BikeCard({ id, name, year, price, tag, image }: BikeCardProps) {
  return (
    <div className={styles.card}>
      {/* Image + badge + arrow */}
      <div className={styles.cardImg}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1200px) 33vw, 420px"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {tag && <span className={styles.cardBadge}>{tag}</span>}
        <Link href={`/bike/${id}`} className={styles.cardArrow} aria-label={`Ver ${name}`}>
          →
        </Link>
      </div>

      {/* Info row */}
      <div className={styles.cardInfo}>
        <div className={styles.cardLeft}>
          {tag && <span className={styles.cardTag}>{tag}</span>}
          <span className={styles.cardName}>{name}</span>
          <span className={styles.cardYear}>{year}</span>
        </div>
        <div className={styles.cardRight}>
          <span className={styles.cardPriceLabel}>a partir de</span>
          <span className={styles.cardPrice}>{price}</span>
        </div>
      </div>
    </div>
  );
}
