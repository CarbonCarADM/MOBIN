"use client";

import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
  {
    title: 'Escolha seu modelo',
    desc: 'Navegue pelo catálogo e encontre a e-bike ideal para o seu estilo de vida — urbana, off-road ou lazer.',
  },
  {
    title: 'Visite nossa loja na Praia do Canto',
    desc: 'Venha testar pessoalmente na nossa loja em Vitória-ES. Nossa equipe te guia na melhor escolha.',
  },
  {
    title: 'Compra simples e segura',
    desc: 'Pagamento facilitado, parcelamento sem juros e entrega direto na sua porta em todo o ES.',
  },
  {
    title: 'Suporte completo pós-venda',
    desc: 'Oficina própria, estoque de peças e assistência técnica garantida para você pedalar sempre.',
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
        <span className={styles.label}>Como funciona</span>
        <h2 className={styles.title}>Do catálogo à sua porta</h2>
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
