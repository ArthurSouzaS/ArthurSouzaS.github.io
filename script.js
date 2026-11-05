// Portfólio · Arthur Souza Soares

(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.remove("no-js");

  // localStorage pode falhar (aba anônima, bloqueio de cookies)
  const storage = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignora */ } },
  };

  /* =========================================================
     Traduções
     ========================================================= */
  const translations = {
    pt: {
      "meta.title": "Arthur Souza Soares | Desenvolvedor Full Stack",
      "meta.description": "Portfólio de Arthur Souza Soares, estudante de Desenvolvimento de Sistemas no SENAI. Projetos com TypeScript, React, Next.js, Node.js, Prisma e PostgreSQL.",
      "meta.ogTitle": "Arthur Souza Soares | Portfólio",
      "meta.ogDescription": "Estudante de Desenvolvimento de Sistemas no SENAI. Full stack com TypeScript, React, Next.js e Node.js.",

      skip: "Pular para o conteúdo",
      "nav.home": "Início",
      "nav.label": "Navegação principal",
      "nav.about": "Sobre",
      "nav.stack": "Tecnologias",
      "nav.projects": "Projetos",
      "nav.contact": "Contato",
      "nav.openMenu": "Abrir menu",
      "nav.closeMenu": "Fechar menu",
      "prefs.toLight": "Ativar tema claro",
      "prefs.toDark": "Ativar tema escuro",
      "prefs.lang": "Mudar idioma para inglês",

      "hero.tag": "Disponível para estágio e projetos",
      "hero.hello": "Olá, eu sou",
      "hero.roleSr": "Desenvolvedor Full Stack",
      "hero.rolePrefix": "Desenvolvedor ",
      "hero.words": ["Full Stack", "Back-end", "Front-end", "Mobile"],
      "hero.desc": "Estudante de Desenvolvimento de Sistemas no SENAI. Gosto de transformar regras de negócio em APIs bem organizadas e interfaces fáceis de usar, do banco de dados até a tela.",
      "hero.ctaProjects": "Ver projetos",
      "hero.ctaContact": "Fale comigo",
      "hero.social": "Redes",
      "hero.code": `<span class="k">const</span> <span class="v">arthur</span> = {
  <span class="p">nome</span>: <span class="s">"Arthur Souza Soares"</span>,
  <span class="p">curso</span>: <span class="s">"Desenvolvimento de Sistemas"</span>,
  <span class="p">escola</span>: <span class="s">"SENAI"</span>,
  <span class="p">foco</span>: [<span class="s">"back-end"</span>, <span class="s">"front-end"</span>, <span class="s">"mobile"</span>],
  <span class="p">stack</span>: [
    <span class="s">"TypeScript"</span>, <span class="s">"Node.js"</span>, <span class="s">"Express"</span>,
    <span class="s">"Prisma"</span>, <span class="s">"PostgreSQL"</span>,
    <span class="s">"React"</span>, <span class="s">"Next.js"</span>, <span class="s">"React Native"</span>
  ],
  <span class="p">metodologia</span>: <span class="s">"Scrum"</span>,
  <span class="p">aprendendo</span>: <span class="k">true</span>,
};

<span class="v">arthur</span>.<span class="f">construir</span>(<span class="s">"algo útil"</span>); <span class="c">// 🚀</span>`,

      "about.kicker": "01. sobre mim",
      "about.title": "Quem sou eu",
      "about.p1": "Sou estudante do curso técnico de <strong>Desenvolvimento de Sistemas no SENAI</strong>, em São Paulo. No curso aprendi a levar um sistema da ideia até o deploy: levantamento de requisitos, modelagem do banco, API, interface web e app mobile.",
      "about.p2": "Meu principal projeto é o <strong>Protutal</strong>, nosso TCC: uma plataforma de tutoria entre alunos da rede SESI. Nele trabalhei principalmente no <strong>back-end</strong>, criando as rotas de salas, materiais, atividades, contestação de notas e desempenho, além de participar das telas do front-end.",
      "about.p3": "Trabalho em equipe com <strong>Scrum</strong> e Git Flow, e uso ferramentas de IA como o Claude Code no dia a dia para acelerar o desenvolvimento sem perder o controle do código.",
      "about.stat1": "Sprints entregues no TCC",
      "about.stat2": "Tecnologias usadas em projeto real",
      "about.stat3": "Plataformas: API, web e mobile",

      "stack.kicker": "02. tecnologias",
      "stack.title": "O que eu já usei",
      "stack.lead": "Tudo isto foi usado na prática no Protutal e em projetos do curso.",
      "stack.db": "Banco de dados",
      "stack.dataDict": "Dicionário de dados",
      "stack.tools": "Ferramentas",
      "stack.process": "Processo",
      "stack.requirements": "Requisitos (RF/RNF)",
      "stack.businessRules": "Regras de negócio",
      "stack.apiDocs": "Documentação de API",

      "projects.kicker": "03. projetos",
      "projects.title": "O que eu construí",
      "projects.mockAvg": "média geral",
      "projects.mockActivities": "atividades",
      "projects.mockTutees": "tutorados",
      "projects.featureLabel": "Projeto em destaque · TCC",
      "projects.featureDesc": "Plataforma web e mobile de <strong>tutoria entre alunos</strong> da rede SESI, com foco em Geografia. O professor transforma alunos em tutores, os tutores criam atividades e dão notas, e todos acompanham o desempenho por conteúdo e por etapa.",
      "projects.featureItem1": "Rotas de <strong>salas, materiais, atividades, contestação de notas e desempenho</strong>",
      "projects.featureItem2": "Upload de arquivos com <strong>Cloudinary</strong> e confirmação de e-mail com <strong>Nodemailer</strong>",
      "projects.featureItem3": "Banco modelado do MER ao schema <strong>Prisma + PostgreSQL</strong>",
      "projects.featureItem4": "Front web em <strong>Next.js</strong> e app mobile em <strong>React Native / Expo</strong>",
      "projects.featureNote": "Projeto em equipe com Cesar Castro, Luisa Santos e Ruben Rocha.",
      "projects.carouselTitle": "Carrossel 3D",
      "projects.carouselDesc": "Carrossel de imagens em 3D feito em aula sobre colaboração em projetos compartilhados com Git e GitHub.",
      "projects.carouselLink": "Ver Carrossel 3D no GitHub",
      "projects.portfolioTitle": "Este portfólio",
      "projects.portfolioDesc": "Site pessoal responsivo, com tema claro e escuro, versão em inglês e animações leves, sem framework e publicado no GitHub Pages.",
      "projects.portfolioLink": "Ver código deste portfólio no GitHub",
      "projects.focusDesc": "App de organização de estudos com tarefas por matéria, timer Pomodoro e dashboard de tempo estudado.",
      "projects.focusCode": "Ver código do Foco Estudos no GitHub",
      "projects.focusSite": "Abrir o site do Foco Estudos",

      "contact.kicker": "04. contato",
      "contact.title": "Vamos conversar?",
      "contact.lead": "Estou aberto a oportunidades de estágio, projetos e trocas sobre desenvolvimento. O jeito mais rápido de falar comigo é por e-mail.",
      "contact.copyLabel": "Copiar e-mail arthur.soares0209@outlook.com",
      "contact.hint": "clique para copiar",
      "contact.send": "Enviar e-mail",
      "contact.copied": "E-mail copiado! ✓",

      "footer.top": "Voltar ao topo ↑",
    },

    en: {
      "meta.title": "Arthur Souza Soares | Full Stack Developer",
      "meta.description": "Portfolio of Arthur Souza Soares, Systems Development student at SENAI. Projects with TypeScript, React, Next.js, Node.js, Prisma and PostgreSQL.",
      "meta.ogTitle": "Arthur Souza Soares | Portfolio",
      "meta.ogDescription": "Systems Development student at SENAI. Full stack with TypeScript, React, Next.js and Node.js.",

      skip: "Skip to content",
      "nav.home": "Home",
      "nav.label": "Main navigation",
      "nav.about": "About",
      "nav.stack": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "prefs.toLight": "Switch to light theme",
      "prefs.toDark": "Switch to dark theme",
      "prefs.lang": "Switch language to Portuguese",

      "hero.tag": "Open to internships and projects",
      "hero.hello": "Hi, I'm",
      "hero.roleSr": "Full Stack Developer",
      "hero.rolePrefix": "",
      "hero.words": ["Full Stack Developer", "Back-end Developer", "Front-end Developer", "Mobile Developer"],
      "hero.desc": "Systems Development student at SENAI. I enjoy turning business rules into well-organized APIs and easy-to-use interfaces, from the database all the way to the screen.",
      "hero.ctaProjects": "See projects",
      "hero.ctaContact": "Get in touch",
      "hero.social": "Social links",
      "hero.code": `<span class="k">const</span> <span class="v">arthur</span> = {
  <span class="p">name</span>: <span class="s">"Arthur Souza Soares"</span>,
  <span class="p">course</span>: <span class="s">"Systems Development"</span>,
  <span class="p">school</span>: <span class="s">"SENAI"</span>,
  <span class="p">focus</span>: [<span class="s">"back-end"</span>, <span class="s">"front-end"</span>, <span class="s">"mobile"</span>],
  <span class="p">stack</span>: [
    <span class="s">"TypeScript"</span>, <span class="s">"Node.js"</span>, <span class="s">"Express"</span>,
    <span class="s">"Prisma"</span>, <span class="s">"PostgreSQL"</span>,
    <span class="s">"React"</span>, <span class="s">"Next.js"</span>, <span class="s">"React Native"</span>
  ],
  <span class="p">methodology</span>: <span class="s">"Scrum"</span>,
  <span class="p">learning</span>: <span class="k">true</span>,
};

<span class="v">arthur</span>.<span class="f">build</span>(<span class="s">"something useful"</span>); <span class="c">// 🚀</span>`,

      "about.kicker": "01. about me",
      "about.title": "Who I am",
      "about.p1": "I'm a student in the <strong>Systems Development technical program at SENAI</strong>, in São Paulo. There I learned to take a system from idea to deploy: requirements gathering, database modeling, API, web interface and mobile app.",
      "about.p2": "My main project is <strong>Protutal</strong>, our final project: a peer tutoring platform for students in the SESI school network. I worked mostly on the <strong>back-end</strong>, building the routes for rooms, materials, activities, grade appeals and performance, and also helped with front-end screens.",
      "about.p3": "I work in teams using <strong>Scrum</strong> and Git Flow, and I use AI tools like Claude Code every day to speed up development without losing control of the code.",
      "about.stat1": "Sprints delivered in the final project",
      "about.stat2": "Technologies used in a real project",
      "about.stat3": "Platforms: API, web and mobile",

      "stack.kicker": "02. skills",
      "stack.title": "What I've worked with",
      "stack.lead": "Everything here was used hands-on in Protutal and in course projects.",
      "stack.db": "Database",
      "stack.dataDict": "Data dictionary",
      "stack.tools": "Tools",
      "stack.process": "Process",
      "stack.requirements": "Requirements (FR/NFR)",
      "stack.businessRules": "Business rules",
      "stack.apiDocs": "API documentation",

      "projects.kicker": "03. projects",
      "projects.title": "What I've built",
      "projects.mockAvg": "overall average",
      "projects.mockActivities": "activities",
      "projects.mockTutees": "tutees",
      "projects.featureLabel": "Featured project · Final project",
      "projects.featureDesc": "Web and mobile platform for <strong>peer tutoring</strong> in the SESI school network, focused on Geography. Teachers turn students into tutors, tutors create activities and grade them, and everyone tracks performance by topic and by term.",
      "projects.featureItem1": "Routes for <strong>rooms, materials, activities, grade appeals and performance</strong>",
      "projects.featureItem2": "File uploads with <strong>Cloudinary</strong> and e-mail confirmation with <strong>Nodemailer</strong>",
      "projects.featureItem3": "Database modeled from the ER diagram to a <strong>Prisma + PostgreSQL</strong> schema",
      "projects.featureItem4": "Web front end in <strong>Next.js</strong> and mobile app in <strong>React Native / Expo</strong>",
      "projects.featureNote": "Team project with Cesar Castro, Luisa Santos and Ruben Rocha.",
      "projects.carouselTitle": "3D Carousel",
      "projects.carouselDesc": "3D image carousel built in a class about collaborating on shared projects with Git and GitHub.",
      "projects.carouselLink": "View 3D Carousel on GitHub",
      "projects.portfolioTitle": "This portfolio",
      "projects.portfolioDesc": "Responsive personal website with light and dark themes, an English version and subtle animations, built without frameworks and hosted on GitHub Pages.",
      "projects.portfolioLink": "View this portfolio's code on GitHub",
      "projects.focusDesc": "Study organizer app with tasks by subject, a Pomodoro timer and a dashboard of time studied.",
      "projects.focusCode": "View Foco Estudos code on GitHub",
      "projects.focusSite": "Open the Foco Estudos website",

      "contact.kicker": "04. contact",
      "contact.title": "Let's talk?",
      "contact.lead": "I'm open to internship opportunities, projects and conversations about development. The fastest way to reach me is by e-mail.",
      "contact.copyLabel": "Copy e-mail arthur.soares0209@outlook.com",
      "contact.hint": "click to copy",
      "contact.send": "Send e-mail",
      "contact.copied": "E-mail copied! ✓",

      "footer.top": "Back to top ↑",
    },
  };

  const LANGS = { pt: "pt-BR", en: "en" };
  let lang = storage.get("lang") === "en" ? "en" : "pt";
  const t = (key) => translations[lang][key] ?? translations.pt[key] ?? "";

  /* =========================================================
     Tema claro/escuro
     ========================================================= */
  const themeBtn = $("#theme-toggle");
  const themeMeta = $('meta[name="theme-color"]');

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    themeMeta.setAttribute("content", theme === "light" ? "#f7f8fb" : "#0b0d12");
    themeBtn.setAttribute("aria-label", t(theme === "light" ? "prefs.toDark" : "prefs.toLight"));
  };
  const currentTheme = () => (root.getAttribute("data-theme") === "light" ? "light" : "dark");

  themeBtn.addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    storage.set("theme", next);
    applyTheme(next);
  });

  /* =========================================================
     Idioma
     ========================================================= */
  const langBtn = $("#lang-toggle");
  const typed = $(".typed");
  let restartTyping = () => {};

  const applyLang = (next) => {
    lang = next;
    root.setAttribute("lang", LANGS[lang]);

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    $$("[data-lang]", langBtn).forEach((s) => s.classList.toggle("is-current", s.dataset.lang === lang));
    langBtn.setAttribute("aria-label", t("prefs.lang"));
    applyTheme(currentTheme()); // atualiza o aria-label do botão de tema
    setMenuLabel();
    restartTyping();
  };

  langBtn.addEventListener("click", () => {
    const next = lang === "pt" ? "en" : "pt";
    storage.set("lang", next);
    applyLang(next);
  });

  /* =========================================================
     Navegação
     ========================================================= */
  // Ano no rodapé
  $("#ano").textContent = new Date().getFullYear();

  // Nav com fundo ao rolar
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const toggle = $(".nav__toggle");
  const menu = $("#menu");
  const isMenuOpen = () => toggle.getAttribute("aria-expanded") === "true";
  function setMenuLabel() {
    toggle.setAttribute("aria-label", t(isMenuOpen() ? "nav.closeMenu" : "nav.openMenu"));
  }
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    setMenuLabel();
    menu.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", () => {
    const open = !isMenuOpen();
    setMenu(open);
    if (open) setTimeout(() => $("a", menu)?.focus(), 50);
  });
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen()) { setMenu(false); toggle.focus(); }
  });

  // Link ativo conforme a seção visível
  const links = $$(".nav__menu a");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  // Animação de entrada
  const revealEls = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 80}ms`;
      io.observe(el);
    });
  }

  // Efeito de digitação no cargo (palavras vêm das traduções)
  if (typed) {
    let timer;
    restartTyping = () => {
      clearTimeout(timer);
      const words = t("hero.words");
      typed.textContent = words[0];
      if (reduceMotion) return;
      let w = 0, c = words[0].length, deleting = true;
      const tick = () => {
        typed.textContent = words[w].slice(0, c);
        let delay = deleting ? 55 : 95;
        if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
        else if (!deleting && c === words[w].length) { deleting = true; delay = 2000; }
        c += deleting ? -1 : 1;
        timer = setTimeout(tick, delay);
      };
      timer = setTimeout(tick, 2200);
    };
  }

  // Copiar e-mail
  const toast = $(".toast");
  let toastTimer;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2200);
  };
  const emailBtn = $(".contact__email");
  emailBtn.addEventListener("click", async () => {
    const email = emailBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(t("contact.copied"));
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });

  // Estado inicial
  applyLang(lang);
})();
