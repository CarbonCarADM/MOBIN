"use client";

import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
  {
    title: 'Marcas líderes de mercado',
    desc: 'Acesso às marcas mais potentes e tecnológicas do segmento, como as bicicletas elétricas OUXI.',
  },
  {
    title: 'Loja física em Vitória',
    desc: 'Um ano de garantia de fábrica e a segurança de testar o modelo ideal antes de comprar.',
  },
  {
    title: 'Oficina própria especializada',
    desc: 'Mecânicos capacitados para qualquer suporte ou manutenção da sua bike elétrica.',
  },
  {
    title: 'Pós-venda completo',
    desc: 'Amplo estoque de peças de reposição e assistência técnica garantida sempre que precisar.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="como-funciona">
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className={styles.label}>Por que a Mobin</span>
        <h2 className={styles.title}>Por que escolher a Mobin</h2>
      </motion.div>

      <div className={styles.timeline}>
        <div className={styles.line} />

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              className={`${styles.step} ${isLeft ? styles.stepLeft : styles.stepRight}`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              <div className={styles.content}>
                <span className={styles.stepNumber}>0{i + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>

              {/* Center node — just a small circle on the line */}
              <motion.div 
                className={styles.nodeWrap}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.4,
                  delay: i * 0.15 + 0.3,
                  ease: "backOut"
                }}
              >
                <div className={styles.node} />
              </motion.div>

              <div className={styles.spacer} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
