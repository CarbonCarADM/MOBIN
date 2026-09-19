import Link from 'next/link';
import styles from './Hero.module.css';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.bg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.postimg.cc/j5GZy07b/Design-sem-nome.png"
            alt=""
            className={styles.bgImg}
            aria-hidden="true"
          />
        </div>
        <div className={styles.overlay} />

        {/* Search bar — top right */}
        <SearchBar />

        <div className={styles.content}>
          <div className={styles.bottom}>
            {/* Left — título, subtítulo, botão */}
            <div className={styles.left}>
              <h1 className={styles.title}>
                Bikes elétricas premium para cada jornada
              </h1>
              <p className={styles.subtitle}>
                Bikes elétricas selecionadas, tecnologia confiável e atendimento especializado
              </p>
              <Link href="#catalogo" className={styles.btn}>
                Ver catálogo
                <span className={styles.btnArrow}>→</span>
              </Link>
            </div>

            {/* Stats cards */}
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg viewBox="0 0 24 24">
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <path d="M15 6h-3l-3 5h6" />
                    <path d="M15 6l3.5 5.5" />
                    <path d="M5.5 17.5L9 12l3-1" />
                  </svg>
                </div>
                <div className={styles.statText}>
                  <span className={styles.statValue}>800+</span>
                  <span className={styles.statLabel}>Bikes Vendidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
