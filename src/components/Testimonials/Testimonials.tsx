"use client";

import React from 'react';
import { motion } from "framer-motion";
import styles from './Testimonials.module.css';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Atendimento muito bom, pós compra excelente, a mecânica muito boa, fiz a melhor escolha! Indico sempre, estou muito feliz com a minha V8 Pro!!!",
    image: "https://ui-avatars.com/api/?name=Kevyn+Nunes&background=e0e0e0&color=555&size=200",
    name: "Kevyn Nunes",
    date: "3 semanas atrás",
  },
  {
    text: "Comprei minha bike modelo V8 Pro há cerca de 1 ano. O atendimento foi excelente desde o início e até hoje continuam nos atendendo, seja com dúvidas ou para fazer a revisão. Atendimento de primeira. Recomendo.",
    image: "https://ui-avatars.com/api/?name=Leticia+Souza&background=e0e0e0&color=555&size=200",
    name: "Leticia Souza Baesse",
    date: "1 mês atrás",
  },
  {
    text: "Atendimento diferenciado!! Com certeza foi o melhor lugar pra comprar minha bike elétrica. Além dos preços, tem oficina e peças, suporte completo pro cliente. Super recomendo.",
    image: "https://ui-avatars.com/api/?name=Henrique+Mazzega&background=e0e0e0&color=555&size=200",
    name: "Henrique Mazzega",
    date: "2 meses atrás",
  },
  {
    text: "O atendimento prestado pela equipe foi muito bom. Iniciou no WhatsApp e terminou na venda, tudo em 2 dias. Ainda, levaram a bike na minha casa.",
    image: "https://ui-avatars.com/api/?name=Felipe+Pezzin&background=e0e0e0&color=555&size=200",
    name: "Felipe Pezzin",
    date: "2 meses atrás",
  },
  {
    text: "Vendedores atenciosos, mesmo após a compra continuam tirando todas as suas dúvidas e te dando toda assistência. Super recomendo.",
    image: "https://ui-avatars.com/api/?name=Vargas+Dridri&background=e0e0e0&color=555&size=200",
    name: "Vargas Dridri",
    date: "2 meses atrás",
  },
  {
    text: "Me atenderam super bem, comprei minha V8 Pro com eles. E agora no pós venda, sempre que os procuro para dúvidas, continuam me atendendo.",
    image: "https://ui-avatars.com/api/?name=Larissa+Borelli&background=e0e0e0&color=555&size=200",
    name: "Larissa Borelli",
    date: "3 meses atrás",
  },
  {
    text: "Estou feliz com minha nova aquisição. Melhor preço que encontrei e facilidade no pagamento. Atendimento nota 10. Quem estiver em busca de bike elétrica esse é o melhor lugar.",
    image: "https://ui-avatars.com/api/?name=Leandro+Olimpio&background=e0e0e0&color=555&size=200",
    name: "Leandro Olímpio",
    date: "1 ano atrás",
  },
  {
    text: "A melhor loja de bicicletas elétricas possível. Atendimento de primeira qualidade e produtos impecáveis. Recomendo para todos!",
    image: "https://ui-avatars.com/api/?name=Alex+Siqueira&background=e0e0e0&color=555&size=200",
    name: "Alex Siqueira",
    date: "2 meses atrás",
  },
  {
    text: "Super atenciosos e profissionais, resolveram todos os problemas que comuniquei e entregaram a bike da revisão quase nova, limpíssima, além de cumprirem com o prazo estabelecido.",
    image: "https://ui-avatars.com/api/?name=Gabi+Cruz&background=e0e0e0&color=555&size=200",
    name: "Gabi Cruz",
    date: "1 ano atrás",
  },
  {
    text: "Atendimento incrível. Apaixonada na minha bike elétrica, excelente qualidade.",
    image: "https://ui-avatars.com/api/?name=Samara+Gomes&background=e0e0e0&color=555&size=200",
    name: "Sâmara Gomes",
    date: "1 ano atrás",
  },
  {
    text: "Ótimo atendimento, preço bom, produtos e acessórios de qualidade e suporte direto da loja.",
    image: "https://ui-avatars.com/api/?name=Antonio+Zamborlini&background=e0e0e0&color=555&size=200",
    name: "Antonio Leonardo Zamborlini",
    date: "1 ano atrás",
  },
  {
    text: "Atendimento top e preço excelente! Qualidade nos equipamentos e no cuidado com minha bike. Recomendo demais.",
    image: "https://ui-avatars.com/api/?name=Leandro+Salarini&background=e0e0e0&color=555&size=200",
    name: "Leandro Salarini",
    date: "1 ano atrás",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

const TestimonialsColumn = ({ testimonials, direction }: { testimonials: Testimonial[], direction: 'up' | 'down' }) => {
  return (
    <div className={styles.column}>
      <motion.div
        className={styles.track}
        animate={{
          y: direction === 'up' ? [0, -760] : [-760, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.text}>{testimonial.text}</p>
            <div className={styles.footer}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={styles.avatar}
              />
              <div className={styles.info}>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={styles.stars}>★★★★★</div>
                <div className={styles.date}>{testimonial.date}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>Depoimentos</span>
        <h2 className={styles.title}>O que dizem nossos clientes</h2>
        <p className={styles.subtitle}>
          Descubra como centenas de clientes transformaram sua mobilidade com nossas e-bikes.
        </p>

        {/* Google Reviews badge */}
        <div className={styles.googleBadge}>
          <svg className={styles.googleLogo} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>

          <div className={styles.googleDivider} />

          <div className={styles.googleInfo}>
            <div className={styles.googleStars}>
              <span className={styles.googleRating}>4.9</span>
              <span className={styles.googleStarIcons}>★★★★★</span>
            </div>
            <span className={styles.googleCount}>50+ avaliações no Google</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <TestimonialsColumn testimonials={firstColumn} direction="up" />
        <TestimonialsColumn testimonials={secondColumn} direction="down" />
        <TestimonialsColumn testimonials={thirdColumn} direction="up" />
      </div>
    </section>
  );
}
