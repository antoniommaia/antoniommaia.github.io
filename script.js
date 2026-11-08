document.querySelector('#year').textContent = new Date().getFullYear();

const translations = {
  en: {
    'meta.description': 'Professional portfolio of António Maia, final-year Computer Engineering student.',
    'page.title': 'António Maia | Computer Engineering Portfolio',
    skip: 'Skip to content',
    'nav.aria': 'Primary navigation',
    'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
    'nav.skills': 'Skills', 'nav.contact': 'Contact',
    'language.aria': 'Language selection',
    'hero.eyebrow': 'Computer Engineering Student',
    'hero.title': 'Building reliable digital experiences with <em>curiosity</em> and care.',
    'hero.intro': 'I am António Maia, a final-year Computer Engineering student with practical experience in software quality assurance and academic work across web, Android and database development.',
    'hero.cv': 'View my CV', 'hero.explore': 'Explore projects',
    'hero.fact1Title': 'Final year', 'hero.fact1Text': 'Computer Engineering',
    'hero.fact2Title': 'QA experience', 'hero.fact2Text': 'Manual and automated testing',
    'hero.fact3Text': 'Vilnius, Lithuania', 'hero.location': 'Based in Évora, Portugal',
    'hero.photoAlt': 'Portrait of António Maia',
    'about.label': 'About',
    'about.title': 'A broad technical foundation, strengthened by an international perspective.',
    'about.p1': 'I enjoy understanding how software works, identifying what can be improved and turning ideas into useful, dependable solutions. My studies have given me experience with programming, APIs, mobile development and relational databases.',
    'about.p2': 'From January to June 2025, I joined the Erasmus Exchange Programme at the VIKO Faculty of Electronics and Informatics in Vilnius. The experience strengthened my adaptability, communication and independence.',
    'experience.label': 'Experience and education', 'experience.date1': 'September 2026',
    'experience.type1': 'Professional experience', 'experience.title1': 'Software Quality Assurance Intern',
    'experience.text1': 'Performed manual and automated software testing, recorded defects and test results, and collaborated with team members to support software quality activities.',
    'experience.date2': '2023 — Present', 'experience.type2': 'Education',
    'experience.title2': 'Bachelor’s Degree in Computer Engineering',
    'experience.text2': 'Final-year student developing a practical foundation across software development, databases, systems and software quality.',
    'experience.date3': 'January — June 2025', 'experience.type3': 'International experience',
    'experience.title3': 'Erasmus Exchange Programme',
    'experience.text3': 'An international academic experience that developed adaptability, communication and confidence in a new environment.',
    'projects.label': 'Selected projects', 'projects.title': 'From live data to mobile reminders and relational systems.',
    'projects.intro': 'Academic work that reflects my interest in building complete, practical solutions.',
    'projects.pulseCaption': 'Real usage data shared on LinkedIn', 'projects.pulseType': 'Web application',
    'projects.pulseText': 'A database-backed FIFA World Cup 2026 application with live football information, external REST API integration, JSON processing and data management. During the tournament, it reached 304 users, 607 visits and 227 installations.',
    'projects.databaseTag': 'Database', 'projects.pulseLink': 'View Pulse26 on LinkedIn',
    'projects.pulseAlt': 'Pulse26 analytics dashboard showing users, visits, installations and geographic usage',
    'projects.reminderType': 'Mobile application', 'projects.reminderTitle': 'Reminder Application',
    'projects.reminderText': 'An Android application developed in Kotlin with reminders, notifications, interface design and local data management.',
    'projects.rentalType': 'Database system', 'projects.rentalTitle': 'Rental Management Database',
    'projects.rentalText': 'A relational database with stored procedures, triggers, security roles and structured data management.',
    'projects.modellingTag': 'Data modelling',
    'skills.label': 'Skills', 'skills.title': 'A versatile toolkit for building and improving software.',
    'skills.intro': 'I combine development fundamentals with a quality-focused mindset and a collaborative approach.',
    'skills.programming': 'Programming', 'skills.web': 'Web and mobile', 'skills.databases': 'Databases',
    'skills.databasesText': 'Microsoft SQL Server · Database design · Administration',
    'skills.testing': 'Testing and methods', 'skills.testingText': 'Manual testing · Automated testing · Defect reporting · Scrum · ISTQB Foundation syllabus',
    'skills.tools': 'Tools and systems', 'skills.toolsText': 'Git · GitHub · Visual Studio Code · Android Studio · Linux fundamentals',
    'skills.soft': 'Soft skills', 'skills.softText': 'Teamwork · Communication · Attention to detail · Problem-solving · Responsibility · Adaptability',
    'contact.label': 'Contact', 'contact.title': 'Let’s connect.',
    'contact.text': 'I am always open to meeting people, learning from new challenges and discussing technology.',
    'contact.openPdf': 'Open PDF', 'footer': 'Computer Engineering Portfolio'
  },
  pt: {
    'meta.description': 'Portefólio profissional de António Maia, estudante finalista de Engenharia Informática.',
    'page.title': 'António Maia | Portefólio de Engenharia Informática',
    skip: 'Saltar para o conteúdo',
    'nav.aria': 'Navegação principal',
    'nav.about': 'Sobre mim', 'nav.experience': 'Experiência', 'nav.projects': 'Projetos',
    'nav.skills': 'Competências', 'nav.contact': 'Contacto',
    'language.aria': 'Seleção de idioma',
    'hero.eyebrow': 'Estudante de Engenharia Informática',
    'hero.title': 'A criar experiências digitais fiáveis com <em>curiosidade</em> e dedicação.',
    'hero.intro': 'Sou o António Maia, estudante finalista de Engenharia Informática, com experiência prática em qualidade de software e projetos académicos nas áreas de desenvolvimento web, Android e bases de dados.',
    'hero.cv': 'Ver o meu CV', 'hero.explore': 'Explorar projetos',
    'hero.fact1Title': 'Último ano', 'hero.fact1Text': 'Engenharia Informática',
    'hero.fact2Title': 'Experiência em QA', 'hero.fact2Text': 'Testes manuais e automáticos',
    'hero.fact3Text': 'Vilnius, Lituânia', 'hero.location': 'Em Évora, Portugal',
    'hero.photoAlt': 'Retrato de António Maia',
    'about.label': 'Sobre mim',
    'about.title': 'Uma base técnica abrangente, reforçada por uma perspetiva internacional.',
    'about.p1': 'Gosto de compreender como o software funciona, identificar oportunidades de melhoria e transformar ideias em soluções úteis e fiáveis. Ao longo do curso, adquiri experiência em programação, APIs, desenvolvimento móvel e bases de dados relacionais.',
    'about.p2': 'Entre janeiro e junho de 2025, participei no programa Erasmus na Faculdade de Eletrónica e Informática da VIKO, em Vilnius. Esta experiência reforçou a minha capacidade de adaptação, comunicação e independência.',
    'experience.label': 'Experiência e formação', 'experience.date1': 'Setembro de 2026',
    'experience.type1': 'Experiência profissional', 'experience.title1': 'Estagiário de Software Quality Assurance',
    'experience.text1': 'Realizei testes manuais e automáticos de software, registei defeitos e resultados de testes e colaborei com a equipa em atividades relacionadas com a qualidade do software.',
    'experience.date2': '2023 — Presente', 'experience.type2': 'Formação',
    'experience.title2': 'Licenciatura em Engenharia Informática',
    'experience.text2': 'Estudante finalista com uma base prática em desenvolvimento de software, bases de dados, sistemas e qualidade de software.',
    'experience.date3': 'Janeiro — Junho de 2025', 'experience.type3': 'Experiência internacional',
    'experience.title3': 'Programa de mobilidade Erasmus',
    'experience.text3': 'Uma experiência académica internacional que desenvolveu a minha capacidade de adaptação, comunicação e confiança num novo ambiente.',
    'projects.label': 'Projetos selecionados', 'projects.title': 'De dados em tempo real a aplicações móveis e sistemas relacionais.',
    'projects.intro': 'Trabalhos académicos e pessoais que refletem o meu interesse em criar soluções completas e práticas.',
    'projects.pulseCaption': 'Dados reais de utilização partilhados no LinkedIn', 'projects.pulseType': 'Aplicação web',
    'projects.pulseText': 'Uma aplicação para o Mundial de Futebol de 2026, suportada por uma base de dados, com informação em direto, integração de uma API REST externa, processamento de JSON e gestão de dados. Durante o torneio, alcançou 304 utilizadores, 607 visitas e 227 instalações.',
    'projects.databaseTag': 'Base de dados', 'projects.pulseLink': 'Ver o Pulse26 no LinkedIn',
    'projects.pulseAlt': 'Painel de análise do Pulse26 com utilizadores, visitas, instalações e distribuição geográfica',
    'projects.reminderType': 'Aplicação móvel', 'projects.reminderTitle': 'Aplicação de lembretes',
    'projects.reminderText': 'Uma aplicação Android desenvolvida em Kotlin com lembretes, notificações, desenho da interface e gestão local de dados.',
    'projects.rentalType': 'Sistema de base de dados', 'projects.rentalTitle': 'Base de dados para gestão de alugueres',
    'projects.rentalText': 'Uma base de dados relacional com procedimentos armazenados, triggers, funções de segurança e gestão estruturada de dados.',
    'projects.modellingTag': 'Modelação de dados',
    'skills.label': 'Competências', 'skills.title': 'Um conjunto versátil de competências para desenvolver e melhorar software.',
    'skills.intro': 'Combino fundamentos de desenvolvimento com atenção à qualidade e uma abordagem colaborativa.',
    'skills.programming': 'Programação', 'skills.web': 'Web e mobile', 'skills.databases': 'Bases de dados',
    'skills.databasesText': 'Microsoft SQL Server · Conceção de bases de dados · Administração',
    'skills.testing': 'Testes e metodologias', 'skills.testingText': 'Testes manuais · Testes automáticos · Registo de defeitos · Scrum · Conteúdos ISTQB Foundation',
    'skills.tools': 'Ferramentas e sistemas', 'skills.toolsText': 'Git · GitHub · Visual Studio Code · Android Studio · Fundamentos de Linux',
    'skills.soft': 'Soft skills', 'skills.softText': 'Trabalho em equipa · Comunicação · Atenção ao detalhe · Resolução de problemas · Responsabilidade · Adaptabilidade',
    'contact.label': 'Contacto', 'contact.title': 'Vamos conversar.',
    'contact.text': 'Estou sempre disponível para conhecer novas pessoas, aprender com novos desafios e conversar sobre tecnologia.',
    'contact.openPdf': 'Abrir PDF', 'footer': 'Portefólio de Engenharia Informática'
  }
};

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.title = dictionary['page.title'];
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value) element.setAttribute('content', value);
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  try { localStorage.setItem('portfolio-language', language); } catch (_) {}
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
applyLanguage(savedLanguage === 'pt' ? 'pt' : 'en');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
