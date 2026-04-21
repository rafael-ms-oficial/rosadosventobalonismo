const SITE = {
  wa: '5551997341719',
  waMsg: (msg) => `https://wa.me/5551997341719?text=${encodeURIComponent(msg)}`,
  instagram: 'https://www.instagram.com/rosadosventosbalonismo/',
  facebook: 'https://www.facebook.com/p/Rosa-dos-ventos-balonismo-100077728352836/',

  heroSlides: [
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/2023-07-26-Voo-Balao-104-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_8368-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_4328-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_3895-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/hot-air-balloon-flies-mountain-landscape-scaled.jpg',
  ],

  packages: [
    {
      id: 'casal',
      name: 'Voo Exclusivo Casal',
      description: 'Uma experiência romântica e inesquecível para dois, com voo privativo ao nascer do sol, brinde especial e total exclusividade para celebrar momentos únicos nas alturas.',
      priceMain: 'R$ 2.745,00',
      installmentsQty: '7x',
      installmentsValue: 'R$379,50',
      priceLabel: 'casal',
      featured: false,
      highlights: [
        { icon: 'fa-mug-hot',   text: 'Cesta de <strong>café especial</strong>' },
        { icon: 'fa-bookmark',  text: 'Balão com cesto exclusivo para 2 pessoas' },
        { icon: 'fa-car',       text: 'Transporte <strong>exclusivo</strong>' },
      ],
      included: [
        'Experiência personalizada',
        'Registro profissional',
        'Transporte local',
        'Brinde com espumante',
        'Atendimento premium',
      ],
      notice: 'Experiência totalmente privada! Cancelamento com até 24 horas antes do seu voo gratuitamente.',
      waMsg: 'Olá! Vi o Voo Exclusivo Casal (R$2.745) na página e gostaria de reservar. Quais são as próximas datas disponíveis?',
    },
    {
      id: 'compartilhado',
      name: 'Voo Compartilhado',
      badge: 'MAIS VENDIDO',
      description: 'A opção ideal para quem deseja viver a emoção do balonismo em grupo, compartilhando o céu, as paisagens e a magia do nascer do sol.',
      priceMain: 'R$ 640,00',
      installmentsQty: '5x',
      installmentsValue: 'R$119,00',
      priceLabel: 'por pessoa',
      featured: true,
      highlights: [
        { icon: 'fa-camera',      text: 'Fotos <strong>digitais</strong>' },
        { icon: 'fa-bookmark',    text: 'Cesto limitado a 8 passageiros' },
        { icon: 'fa-van-shuttle', text: 'Transporte <strong>coletivo</strong>' },
      ],
      included: [
        'Café colonial',
        'Transporte local',
        'Brinde com espumante',
      ],
      notice: 'Voos compartilhados realizados mediante formação de grupo mínimo de passageiros.',
      waMsg: 'Olá! Vi o Voo Compartilhado (R$640 por pessoa) na página e quero saber as próximas datas disponíveis.',
    },
    {
      id: 'familia',
      name: 'Voo Exclusivo Família',
      description: 'Viva momentos especiais com quem você ama em um voo privativo e seguro, com conforto, paisagens deslumbrantes e uma experiência pensada para toda a família.',
      priceMain: 'R$ 790,00',
      installmentsQty: '6x',
      installmentsValue: 'R$115,00',
      priceLabel: 'por pessoa',
      featured: false,
      highlights: [
        { icon: 'fa-mug-hot',  text: 'Cesta de <strong>café especial</strong>' },
        { icon: 'fa-bookmark', text: 'Balão com cesto exclusivo para 5 pessoas' },
        { icon: 'fa-car',      text: 'Transporte <strong>exclusivo</strong>' },
      ],
      included: [
        'Cesta de café da manhã',
        'Fotos e vídeo',
        'Transporte local',
        'Brinde com espumante',
        'Seguro aventura',
      ],
      notice: 'Balão reservado exclusivamente para o seu grupo. Ideal para viver uma aventura em família.',
      waMsg: 'Olá! Vi o Voo Exclusivo Família (R$790 por pessoa) na página e gostaria de reservar. Quais são as datas disponíveis?',
    },
  ],

  steps: [
    {
      icon: 'fa-shield-halved',
      title: 'Recepção e Briefing de Segurança',
      text: 'Começamos ao amanhecer com um acolhimento personalizado. Nossa equipe apresenta todas as orientações de segurança, esclarece dúvidas e prepara você com tranquilidade e confiança para essa experiência única nas alturas.',
    },
    {
      icon: 'fa-sun',
      title: 'Voo Panorâmico ao Nascer do Sol',
      text: 'Com balão certificado e seguindo rigorosamente as normas da aviação, você sobrevoa a Grande Florianópolis enquanto o sol surge no horizonte. Um espetáculo natural que transforma o céu em um cenário simplesmente inesquecível.',
    },
    {
      icon: 'fa-champagne-glasses',
      title: 'Brinde e Café Colonial Exclusivo',
      text: 'Após o pouso, celebramos juntos com um brinde especial e um delicioso café colonial. O momento perfeito para compartilhar emoções, registrar fotos e eternizar essa experiência.',
    },
  ],

  experiences: [
    {
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_4174-1024x683.jpg',
      title: 'Piloto certificado ANAC',
      desc: 'Profissionalismo e experiência que fazem toda a diferença.',
    },
    {
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/2023-07-26-Voo-Balao-104-1024x683.jpg',
      title: 'Vista Panorâmica',
      desc: 'Um cenário deslumbrante que poucos têm o privilégio de viver.',
    },
    {
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/6247b566-d3c1-4a90-864a-86a5f1182e61-682x1024.jpg',
      title: 'Fotos e vídeos',
      desc: 'Memórias eternizadas com qualidade profissional.',
    },
    {
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/freepik__casal-brindando-com-taca-de-espumante-em-solo-e-a-__79240.png',
      title: 'Brinde com Espumante',
      desc: 'Celebre a vida com uma vista extraordinária.',
    },
    {
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/siga-nosso-instagram.jpg',
      title: 'Café Colonial',
      desc: 'Desfrute de um delicioso café cuidadosamente preparado.',
    },
    {
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/pexels-alfonso-escalante-1319242-2533092-1024x683.jpg',
      title: 'Transporte Local',
      desc: 'Sua aventura começa com conforto e tranquilidade.',
    },
  ],

  testimonials: [
    {
      text: '"Viver a experiência de um voo de balão foi incrível! A vista da Grande Florianópolis é espetacular e a equipe foi super atenciosa. Recomendo a todos!"',
      name: 'João da Silva',
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/9122EE30-58D0-4772-B381-DAD8F08A55DC.png',
    },
    {
      text: '"Foi um passeio inesquecível, a sensação de flutuar no céu é indescritível! Uma experiência que com certeza quero repetir."',
      name: 'Maria Souza',
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/267DAD55-8871-4D58-9AD4-09C43B4F48DD.jpg',
    },
    {
      text: '"A experiência foi maravilhosa! Tudo foi muito bem organizado e a equipe transmitiu muita segurança. Valeu cada minuto."',
      name: 'Fernando Almeida',
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/67108654-8E10-4A54-8451-46529678BC24.jpg',
    },
    {
      text: '"Um momento mágico! A tranquilidade do voo e as paisagens lá de cima são de tirar o fôlego. A equipe é bem profissional e simpática."',
      name: 'Patrícia Lima',
      img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/D701DA1F-73DD-4E43-9456-664A3FA01E6D.jpg',
    },
  ],

  instagramPosts: [
    { img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/2023-07-26-Voo-Balao-104-1024x683.jpg',                        url: 'https://www.instagram.com/p/DW8sRWNDeng/', alt: 'Festival Internacional de Balonismo' },
    { img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_8368-scaled.jpg',                                          url: 'https://www.instagram.com/p/DUqlnr3kcK-/', alt: 'Certificação ANAC' },
    { img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_4328-scaled.jpg',                                          url: 'https://www.instagram.com/reel/DSOXwY7DWdS/', alt: 'Normativa ANAC 782/2025' },
    { img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_3895-scaled.jpg',                                          url: 'https://www.instagram.com/reel/DMlkDKRh7qn/', alt: 'Silêncio nas alturas' },
    { img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/men-women-hike-mountain-range-carefree-adventure-generated-by-ai-scaled.jpg', url: 'https://www.instagram.com/p/DMldeiNPFG1/', alt: 'Paisagem da Grande Florianópolis' },
    { img: 'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/hot-air-balloon-flies-mountain-landscape-scaled.jpg',          url: 'https://www.instagram.com/p/DMi4tCJAoYY/', alt: 'Voo panorâmico' },
  ],

  faq: [
    {
      q: 'O voo de balão é seguro?',
      a: 'Sim. Os voos são realizados seguindo rigorosamente as normas da aviação civil brasileira. A operação é autorizada pela <strong>ANAC</strong>, com piloto habilitado e balão certificado. Além disso, os voos só acontecem em condições meteorológicas adequadas para garantir total segurança.',
    },
    {
      q: 'Quanto tempo dura o passeio de balão?',
      a: 'A experiência completa dura aproximadamente <strong>3 a 4 horas</strong>, incluindo recepção, briefing de segurança, preparação do balão, voo panorâmico e celebração após o pouso. O tempo médio de voo é de <strong>40 a 60 minutos</strong>, dependendo das condições climáticas.',
    },
    {
      q: 'É indicada a experiência para crianças?',
      a: 'Sim. Crianças podem participar acompanhadas pelos responsáveis. A idade mínima recomendada é <strong>a partir de 6 anos</strong>, para melhor aproveitamento da experiência.',
    },
    {
      q: 'O que acontece se o clima não estiver favorável?',
      a: 'Caso as condições meteorológicas não sejam adequadas para voo, o passeio é <strong>remarcado para outra data</strong>, priorizando sempre a segurança da operação.',
    },
    {
      q: 'Quantas pessoas cabem no balão?',
      a: '<strong>Voo Compartilhado:</strong> cesto com capacidade para até <strong>8 passageiros</strong>.<br><strong>Voo Exclusivo Casal:</strong> experiência privada para <strong>2 pessoas</strong>.<br><strong>Voo Exclusivo Família:</strong> cesto reservado para grupos ou famílias de até 5 pessoas.',
    },
    {
      q: 'Como funciona o cancelamento?',
      a: 'Para o <strong>Voo Exclusivo Casal</strong>, o cancelamento pode ser feito sem custo com até <strong>24 horas</strong> de antecedência. Para os demais pacotes, entre em contato via WhatsApp para mais detalhes sobre nossa política.',
    },
  ],
};
