const FESTIVAL = {
  wa: '5551997341719',
  waMsg: msg => `https://wa.me/5551997341719?text=${encodeURIComponent(msg)}`,
  waDefault: 'Olá! Quero garantir minha vaga no voo de balão durante o Festival Internacional de Torres. Quais são as datas disponíveis e como faço a reserva?',

  heroSlides: [
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/2023-07-26-Voo-Balao-104-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_8368-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/IMG_4328-scaled.jpg',
    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/hot-air-balloon-flies-mountain-landscape-scaled.jpg',
  ],

  urgencyBar: '🎈 Festival Internacional de Balonismo em Torres/RS — Vagas limitadas por voo. Reserve antes que esgotem.',

  hero: {
    eyebrow: 'Festival Internacional de Balonismo • Torres / RS',
    headline: 'Imagine 110 Balões Coloridos no Céu. Agora Imagine Estar Dentro de Um Deles.',
    subheadline: 'O maior espetáculo aéreo da América Latina acontece uma vez por ano. As vagas para voar durante o festival são contadas. Você vai só assistir — ou vai fazer parte disso?',
    badges: [
      { icon: 'fa-globe-americas', text: 'Maior festival da América Latina' },
      { icon: 'fa-certificate',    text: 'Piloto certificado ANAC' },
      { icon: 'fa-shield-halved',  text: 'Seguro aventura incluso' },
    ],
    cta:    'Garantir minha vaga agora',
    ctaSub: 'Máximo 8 passageiros por balão — vagas se esgotam',
  },

  stats: [
    { value: '110+',   label: 'Balões voando ao mesmo tempo' },
    { value: '1.000+', label: 'Experiências realizadas' },
    { value: '4.9★',   label: 'Avaliação média' },
    { value: '100%',   label: 'Operação certificada ANAC' },
  ],

  // TODO: ajuste o preço conforme a temporada do festival
  package: {
    badge:             'FESTIVAL EXCLUSIVO',
    name:              'Voo Coletivo — Festival de Torres',
    tagline:           'A única forma de voar entre os 110 balões do maior festival de balonismo da América Latina.',
    price:             'R$ 790,00',
    installmentsQty:   '6x',
    installmentsValue: 'R$ 115,00',
    priceLabel:        'por pessoa',
    priceNote:         'Sem juros no cartão',
    duration:          '~3 horas',
    flightTime:        '40–60 min',
    capacity:          '8 passageiros',
    included: [
      { icon: 'fa-sun',               text: '<strong>Voo ao nascer do sol</strong> com 110+ balões no céu' },
      { icon: 'fa-champagne-glasses', text: '<strong>Brinde com espumante</strong> após o pouso' },
      { icon: 'fa-shield-halved',     text: '<strong>Seguro aventura</strong> incluso' },
      { icon: 'fa-van-shuttle',       text: '<strong>Transporte</strong> do parque ao campo de decolagem (ida e volta)' },
      { icon: 'fa-camera',            text: '<strong>Fotos</strong> da experiência inclusas' },
      { icon: 'fa-clock',             text: '<strong>Experiência completa</strong> de aproximadamente 3 horas' },
    ],
    cta:   'Quero garantir minha vaga',
    waMsg: 'Olá! Vi a oferta do Voo Coletivo para o Festival de Torres (R$790 por pessoa) e quero garantir minha vaga. Quais são as datas disponíveis?',
  },

  journey: [
    {
      time:  'Antes do amanhecer',
      icon:  'fa-moon',
      title: 'Encontro no Parque',
      desc:  'Você chega ao ponto de encontro enquanto o mundo ainda dorme. A escuridão da madrugada dá lugar a uma expectativa que você vai sentir no peito — você sabe que algo extraordinário está prestes a acontecer.',
    },
    {
      time:  'Deslocamento',
      icon:  'fa-van-shuttle',
      title: 'Rumo ao Campo de Decolagem',
      desc:  'Nosso transporte te leva com conforto até o campo. Pelo caminho, você já começa a ver as primeiras chamas acendendo os balões ao longe. A paisagem muda — e o coração acelera.',
    },
    {
      time:  'No campo',
      icon:  'fa-shield-halved',
      title: 'Briefing com o Piloto',
      desc:  'Nosso piloto certificado ANAC apresenta todas as orientações com clareza e calma. Você entende cada detalhe do que vai acontecer — e parte do chão com total confiança.',
    },
    {
      time:  'Inflagem',
      icon:  'fa-wind',
      title: 'O Espetáculo Começa no Chão',
      desc:  'Um a um, os balões ganham forma e cor ao seu redor. Torres inteira se transforma em uma galeria de arte suspensa. Você ainda nem voou — e já está sem palavras.',
    },
    {
      time:  'Decolagem',
      icon:  'fa-arrow-up',
      title: 'Você Sobe. O Sol Nasce.',
      desc:  'O balão se eleva suavemente enquanto o horizonte se pinta de laranja e dourado. Lá embaixo, a cidade acorda. Ao seu redor, mais de 100 balões coloridos dividem o mesmo céu. Esse momento não tem preço.',
    },
    {
      time:  'Após o pouso',
      icon:  'fa-champagne-glasses',
      title: 'Brinde e Celebração',
      desc:  'Com os pés no chão e a alma nas alturas, levantamos a taça. Espumante, sorrisos abertos, fotos e aquela sensação de quem acabou de viver algo que poucas pessoas no mundo já viveram.',
    },
  ],

  differentials: [
    {
      icon:  'fa-globe-americas',
      title: 'O Maior da América Latina',
      desc:  'Mais de 110 balões no mesmo céu — esse cenário existe em apenas um lugar no continente. Torres, RS. E você pode estar dentro de um desses balões.',
    },
    {
      icon:  'fa-certificate',
      title: 'Piloto Experiente e Certificado',
      desc:  'Toda operação segue as normas da ANAC. Piloto habilitado, equipamento certificado e voos realizados apenas em condições meteorológicas seguras.',
    },
    {
      icon:  'fa-shield-halved',
      title: 'Seguro Aventura Incluso',
      desc:  'Você voa com total tranquilidade. O seguro aventura já está no pacote — porque aqui, sua segurança é inegociável.',
    },
    {
      icon:  'fa-users',
      title: 'Grupo Pequeno, Experiência Íntima',
      desc:  'Máximo de 8 passageiros por cesto. Você não está em uma excursão de massa — está vivendo uma experiência real com atenção personalizada.',
    },
    {
      icon:  'fa-camera',
      title: 'Fotos Inclusas',
      desc:  'As memórias ficam com você. Fotos da experiência estão incluídas no pacote — porque esse momento merece ser eternizado do jeito certo.',
    },
    {
      icon:  'fa-sun',
      title: 'Voo ao Nascer do Sol',
      desc:  'O horário mais mágico do dia. Luz suave, céu em cores quentes, quietude absoluta lá em cima — e ao fundo, Torres acordando.',
    },
  ],

  audiences: [
    {
      icon:     'fa-heart',
      title:    'Para Casais',
      headline: 'O cenário mais romântico que você vai encontrar no Brasil.',
      desc:     'Imaginem os dois a bordo de um balão, o sol nascendo no horizonte, espumante na mão e 110 balões coloridos ao redor. Nenhum jantar, nenhuma viagem, nenhum presente chega perto disso.',
      cta:      'Reservar para o casal',
      waMsg:    'Olá! Quero reservar o Voo Coletivo para o Festival de Torres para um casal. Quais são as datas disponíveis?',
    },
    {
      icon:     'fa-map-location-dot',
      title:    'Para Turistas',
      headline: 'Você veio ao festival — então viva ele de dentro.',
      desc:     'Ver os balões do chão é lindo. Voar junto com eles é uma experiência de outro nível. Se você está em Torres para o festival, há exatamente uma forma de virar parte do espetáculo.',
      cta:      'Quero ser parte do festival',
      waMsg:    'Olá! Sou turista e quero voar durante o Festival de Torres. Como faço para reservar uma vaga?',
    },
    {
      icon:     'fa-gift',
      title:    'Para Presentear',
      headline: 'O presente que vai ser lembrado por décadas.',
      desc:     'Aniversário, pedido de casamento, surpresa, celebração. Esqueça o que estraga, esquece e sai de moda. Dê uma experiência que fica para sempre — literalmente.',
      cta:      'Dar essa experiência',
      waMsg:    'Olá! Quero dar o Voo no Festival de Torres como presente. Como funciona o processo?',
    },
    {
      icon:     'fa-star',
      title:    'Para Quem Tem na Lista',
      headline: 'Tinha na lista de desejos? O momento é agora.',
      desc:     '"Voar de balão" está na lista de muita gente — e fica lá por anos. Mas o festival de Torres acontece uma vez por ano. E as vagas não esperam por quem adia.',
      cta:      'Realizar agora',
      waMsg:    'Olá! Sempre quis voar de balão e quero aproveitar o Festival de Torres para realizar esse sonho. Como faço a reserva?',
    },
  ],

  safety: [
    { icon: 'fa-certificate',  title: 'Autorizado pela ANAC',          desc: 'Operação 100% autorizada pela Agência Nacional de Aviação Civil. Seguimos cada norma — sem atalhos, sem concessões.' },
    { icon: 'fa-user-tie',     title: 'Piloto experiente e certificado', desc: 'Habilitação completa e anos de experiência em voos de balão. Você está em boas mãos — literalmente.' },
    { icon: 'fa-shield-halved', title: 'Seguro aventura incluso',        desc: 'Já está no pacote. Você não precisa contratar nada separado — está coberto desde o momento da decolagem.' },
    { icon: 'fa-cloud-sun',    title: 'Voos só com clima favorável',     desc: 'Se as condições não estiverem adequadas, o voo não acontece. Segurança sempre prevalece — e remarcamos sem custo.' },
  ],

  urgency: {
    title:    'As vagas para o festival se esgotam toda temporada.',
    subtitle: 'Não é força de expressão.',
    points: [
      'Máximo de 8 passageiros por cesto — por voo',
      'Festival concentra a maior demanda do ano em toda a região',
      'Datas disputadas meses antes da abertura',
      'Quem reserva cedo, voa. Quem espera, assiste do chão.',
    ],
    cta: 'Garantir minha vaga enquanto há tempo',
  },

  testimonials: [
    {
      text:   '"Ver 110 balões no céu enquanto eu estava dentro de um deles foi surreal. Não tem como descrever com palavras. Vai fazer de tudo para viver isso."',
      name:   'Ana Paula Machado',
      detail: 'Viajou com o marido — Festival de Torres',
      img:    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/9122EE30-58D0-4772-B381-DAD8F08A55DC.png',
    },
    {
      text:   '"Minha namorada chorou de emoção quando o sol nasceu lá de cima. Eu também. Foi o melhor presente que já dei na vida."',
      name:   'Lucas Ferreira',
      detail: 'Surpresa no aniversário da namorada',
      img:    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/67108654-8E10-4A54-8451-46529678BC24.jpg',
    },
    {
      text:   '"Nunca pensei que seria tão tranquilo. O piloto transmitiu tanta segurança que eu relaxei em minutos. E aí foi só beleza e emoção do começo ao fim."',
      name:   'Carla Duarte',
      detail: 'Primeira vez de balão — Torres/RS',
      img:    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/D701DA1F-73DD-4E43-9456-664A3FA01E6D.jpg',
    },
    {
      text:   '"Estava na minha lista de desejos há 8 anos. O festival foi o empurrão que precisava. Valeu muito mais do que o que paguei."',
      name:   'Roberto Alves',
      detail: 'Torres/RS — Festival 2025',
      img:    'https://rosadosventosbalonismo.com/wp-content/uploads/2026/02/267DAD55-8871-4D58-9AD4-09C43B4F48DD.jpg',
    },
  ],

  faq: [
    {
      q: 'O voo acontece mesmo se o tempo fechar?',
      a: 'Segurança é absoluta. Os voos só são realizados em condições meteorológicas adequadas. Caso o clima não esteja favorável, remarcamos sem custo adicional. Você não perde nada — a experiência fica garantida.',
    },
    {
      q: 'O voo de balão é seguro?',
      a: 'Sim. Toda a operação segue rigorosamente as normas da <strong>ANAC</strong> (Agência Nacional de Aviação Civil). O piloto é certificado e experiente, o balão é inspecionado e certificado, e o seguro aventura está incluso.',
    },
    {
      q: 'Tem restrição de peso ou idade?',
      a: 'Crianças são bem-vindas a partir de <strong>6 anos</strong>, sempre acompanhadas pelos responsáveis. Para restrições de peso, entre em contato via WhatsApp — nossa equipe orienta com total transparência.',
    },
    {
      q: 'Quantas pessoas voam no mesmo balão?',
      a: 'No voo coletivo, o cesto comporta até <strong>8 passageiros</strong>. Uma experiência compartilhada, mas íntima — longe de excursões em massa.',
    },
    {
      q: 'Como funciona a reserva?',
      a: 'Entre em contato pelo WhatsApp, informe a data e o número de pessoas. Nossa equipe confirma disponibilidade, orienta o pagamento e garante sua vaga. <strong>Não deixe para última hora</strong> — as vagas do festival se esgotam rápido.',
    },
    {
      q: 'O transporte até o campo está incluso?',
      a: 'Sim. O transporte do ponto de encontro no parque até o campo de decolagem — e o retorno — estão inclusos. Você só precisa chegar ao parque.',
    },
    {
      q: 'O que devo levar no dia?',
      a: 'Roupas confortáveis, calçado fechado e uma jaqueta leve (no balão pode fazer um pouco mais de frio). Pode trazer seu celular ou câmera — mas as fotos profissionais já estão incluídas no pacote.',
    },
  ],

  ctaFinal: {
    headline: 'Esse espetáculo acontece uma vez por ano. Sua vaga pode não durar até amanhã.',
    sub:      'Entre em contato pelo WhatsApp agora e garanta sua vaga no maior festival de balonismo da América Latina.',
    cta:      'Garantir minha vaga pelo WhatsApp',
    ctaSub:   'Resposta rápida • Sem compromisso • Vagas limitadas',
  },
};
