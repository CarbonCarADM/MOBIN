// ─────────────────────────────────────────────
// Fonte única de dados do site.
// O admin lê/grava via /api/admin/data.
// Os componentes importam getServerData() (SSR)
// ou usam o hook useAdminData() (client).
// ─────────────────────────────────────────────

export interface BikeSpec {
  [key: string]: string;
}

export interface Bike {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  year: string;
  bodyType: string;
  model: string;
  fuelType: string;
  previousOwners: string;
  mileage: string;
  description: string;
  images: string[];
  tag?: string;
  specs: BikeSpec;
}

export interface Brand {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface Testimonial {
  name: string;
  text: string;
  image: string;
  date: string;
}

export interface HowItWorksStep {
  title: string;
  desc: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroStat: string;
  heroStatLabel: string;
  footerTitle: string;
  footerSubtitle: string;
  mapsEmbed: string;
  copyright: string;
}

export interface SiteData {
  settings: SiteSettings;
  bikes: Bike[];
  brands: Brand[];
  testimonials: Testimonial[];
  howItWorks: HowItWorksStep[];
}

// ─── Dados padrão ────────────────────────────
export const defaultData: SiteData = {
  settings: {
    siteName: 'Mobin',
    siteDescription: 'E-bikes premium, curadoria especializada e suporte completo para cada pedal.',
    whatsapp: '5527999999999',
    instagram: '#instagram',
    facebook: '#facebook',
    heroTitle: 'Bikes elétricas premium para cada jornada',
    heroSubtitle: 'Bikes elétricas selecionadas, tecnologia confiável e atendimento especializado',
    heroImage: 'https://i.postimg.cc/j5GZy07b/Design-sem-nome.png',
    heroStat: '800+',
    heroStatLabel: 'Bikes Vendidas',
    footerTitle: 'Conforto e performance te esperam',
    footerSubtitle: 'Visite nossa loja e teste uma e-bike de luxo instantaneamente',
    mapsEmbed: 'https://maps.google.com/maps?q=Avenida%20Augusto%20Emilio%20Estellita%20Lins%2C%2070%2C%20Jardim%20Camburi%2C%20Vit%C3%B3ria%20-%20ES%2C%2029090-590&t=&z=16&ie=UTF8&iwloc=&output=embed',
    copyright: '© 2025 Mobin. Todos os direitos reservados.',
  },
  bikes: [
    {
      id: 'himiway-cruiser',
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
      tag: 'Performance',
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
    {
      id: 'ado-a20f',
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
      tag: 'Novo',
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
  ],
  brands: [
    { name: 'OUXI',    src: '/brands/ouxi.svg',    width: 100, height: 32 },
    { name: 'Himiway', src: '/brands/himiway.svg', width: 120, height: 32 },
    { name: 'ADO',     src: '/brands/ADO.webp',    width: 120, height: 48 },
    { name: 'Fiido',   src: '/brands/Fiido.webp',  width: 90,  height: 32 },
  ],
  testimonials: [
    { name: 'Kevyn Nunes',        text: 'Atendimento muito bom, pós compra excelente, a mecânica muito boa, fiz a melhor escolha! Indico sempre, estou muito feliz com a minha V8 Pro!!!',                                                                                                          image: 'https://ui-avatars.com/api/?name=Kevyn+Nunes&background=e0e0e0&color=555&size=200',             date: '3 semanas atrás' },
    { name: 'Leticia Souza Baesse',text: 'Comprei minha bike modelo V8 Pro há cerca de 1 ano. Na época o Lucas estava começando no ramo, nos atendeu super bem e até hoje continuam nos atendendo, seja com dúvidas ou para fazer a revisão. Atendimento de primeira. Recomendo.',            image: 'https://ui-avatars.com/api/?name=Leticia+Souza&background=e0e0e0&color=555&size=200',           date: '1 mês atrás' },
    { name: 'Henrique Mazzega',   text: 'Atendimento diferenciado!! Com certeza foi o melhor lugar pra comprar minha bike elétrica. Além dos preços, tem oficina e peças, suporte completo pro cliente. Super recomendo.',                                                                          image: 'https://ui-avatars.com/api/?name=Henrique+Mazzega&background=e0e0e0&color=555&size=200',        date: '2 meses atrás' },
    { name: 'Felipe Pezzin',      text: 'O atendimento prestado pela equipe foi muito bom. Iniciou no WhatsApp e terminou na venda, tudo em 2 dias. Ainda, levaram a bike na minha casa.',                                                                                                          image: 'https://ui-avatars.com/api/?name=Felipe+Pezzin&background=e0e0e0&color=555&size=200',           date: '2 meses atrás' },
    { name: 'Vargas Dridri',      text: 'Vendedores atenciosos, mesmo após a compra continuam tirando todas as suas dúvidas e te dando toda assistência. Super recomendo.',                                                                                                                         image: 'https://ui-avatars.com/api/?name=Vargas+Dridri&background=e0e0e0&color=555&size=200',           date: '2 meses atrás' },
    { name: 'Larissa Borelli',    text: 'Me atenderam super bem, comprei minha V8 Pro com eles. E agora no pós venda, sempre que os procuro para dúvidas, continuam me atendendo.',                                                                                                                image: 'https://ui-avatars.com/api/?name=Larissa+Borelli&background=e0e0e0&color=555&size=200',         date: '3 meses atrás' },
    { name: 'Leandro Olímpio',    text: 'Estou feliz com minha nova aquisição. Melhor preço que encontrei e facilidade no pagamento. Parabéns ao Lucas pelo atendimento nota 10. Quem estiver em busca de bike elétrica esse é o melhor lugar.',                                                 image: 'https://ui-avatars.com/api/?name=Leandro+Olimpio&background=e0e0e0&color=555&size=200',         date: '1 ano atrás' },
    { name: 'Alex Siqueira',      text: 'A melhor loja de bicicletas elétricas possível. Atendimento de primeira qualidade e produtos impecáveis. Recomendo para todos!',                                                                                                                          image: 'https://ui-avatars.com/api/?name=Alex+Siqueira&background=e0e0e0&color=555&size=200',           date: '2 meses atrás' },
    { name: 'Gabi Cruz',          text: 'Super atenciosos e profissionais, resolveram todos os problemas que comuniquei e entregaram a bike da revisão quase nova, limpíssima, além de cumprirem com o prazo estabelecido.',                                                                     image: 'https://ui-avatars.com/api/?name=Gabi+Cruz&background=e0e0e0&color=555&size=200',               date: '1 ano atrás' },
    { name: 'Sâmara Gomes',       text: 'Atendimento incrível. Apaixonada na minha bike elétrica, excelente qualidade.',                                                                                                                                                                           image: 'https://ui-avatars.com/api/?name=Samara+Gomes&background=e0e0e0&color=555&size=200',            date: '1 ano atrás' },
    { name: 'Antonio L. Zamborlini', text: 'Ótimo atendimento, preço bom, produtos e acessórios de qualidade e suporte direto da loja.',                                                                                                                                                          image: 'https://ui-avatars.com/api/?name=Antonio+Zamborlini&background=e0e0e0&color=555&size=200',      date: '1 ano atrás' },
    { name: 'Leandro Salarini',   text: 'Atendimento top e preço excelente! Qualidade nos equipamentos e no cuidado com minha bike. Recomendo demais.',                                                                                                                                            image: 'https://ui-avatars.com/api/?name=Leandro+Salarini&background=e0e0e0&color=555&size=200',        date: '1 ano atrás' },
  ],
  howItWorks: [
    { title: 'Marcas líderes de mercado',       desc: 'Acesso às marcas mais potentes e tecnológicas do segmento, como as bicicletas elétricas OUXI.' },
    { title: 'Loja física em Vitória',          desc: 'Um ano de garantia de fábrica e a segurança de testar o modelo ideal antes de comprar.' },
    { title: 'Oficina própria especializada',   desc: 'Mecânicos capacitados para qualquer suporte ou manutenção da sua bike elétrica.' },
    { title: 'Pós-venda completo',              desc: 'Amplo estoque de peças de reposição e assistência técnica garantida sempre que precisar.' },
  ],
};
