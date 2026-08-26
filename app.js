(function () {
  var root = document.documentElement;

  function getStored(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function setStored(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }

  var translations = {
    es: {
      "meta.title":
        "Kevin Cardoza | Ingeniero en Sistemas | Frontend Developer",
      "contact.title": "Contacto",
      "contact.phone": "Teléfono",
      "contact.email": "Email",
      "contact.location": "Ubicación",
      "contact.availability": "Disponibilidad",
      "contact.availabilityValue": "Disponible para trabajo remoto e híbrido",
      "links.title": "Enlaces",
      "ss.1": "Comunicación Proactiva",
      "ss.2": "Pensamiento Analítico",
      "ss.3": "Trabajo Colaborativo",
      "ss.4": "Gestión de Tiempo",
      "refs.title": "Referencias",
      "langs.title": "Idiomas",
      "langs.es": "Español",
      "langs.esLevel": "Nativo",
      "langs.en": "Inglés",
      "langs.enLevel": "Intermedio–avanzado · Certificado UC Irvine",
      "hero.title": "Ingeniero en Sistemas de Información",
      "hero.summary":
        'Ingeniero graduado de la <strong>Universidad Nacional de Ingeniería (UNI)</strong> con sólida base lógica y capacidad analítica. Con experiencia en el desarrollo de interfaces de usuario modernas y funcionales. Me caracterizo por un aprendizaje autodidacta constante, habiendo obtenido certificaciones internacionales en desarrollo y gramática de inglés. Busco aplicar mi capacidad técnica y responsabilidad en entornos que desafíen mis habilidades de ingeniería.',
      "edu.title": "Educación",
      "edu.degree1": "Ingeniería en Sistemas de Información",
      "edu.degree2": "Bachillerato en Ciencias y Letras",
      "common.more": "Ver más",
      "exp.title": "Experiencia Laboral",
      "exp.job1.title": "Desarrollador Freelance & Consultor Académico",
      "exp.job1.date": "2024 — Presente",
      "exp.job1.b1":
        "Desarrollo de interfaces web responsivas utilizando arquitecturas modernas de Frontend.",
      "exp.job1.b2":
        "Asesoría técnica en proyectos monográficos, enfocada en la gestión y operación de sistemas de información.",
      "exp.job1.b3":
        "Diseño e implementación de bases de datos relacionales para soluciones personalizadas.",
      "exp.job2.title": "Asistente Técnico General",
      "exp.job2.desc":
        "Desarrollo de disciplina laboral, resolución de problemas mecánicos bajo presión y atención directa al cliente.",
      "certs.title": "Certificaciones Internacionales",
      "certs.fe.year": "may. 2026",
      "certs.fs.year": "jul. 2026",
      "certs.view": "Ver certificado ↗",
      "proj.title": "Proyectos",
      "proj.demo": "Demo ↗",
      "proj.code": "Código ↗",
      "proj.intro":
        '<span class="dev-prompt">kevin@dev:~$</span> Desarrollador Full-Stack apasionado por el código limpio.<br><strong>Lenguajes:</strong> JavaScript · Python · C#<br><strong>Frontend:</strong> React · <strong>Backend:</strong> Node.js<br><strong>Bases de datos:</strong> MySQL · PostgreSQL · SQLite<br><br>Estos son los proyectos que he construido.',
      "proj.p1.name": "CV Web / Portafolio",
      "proj.p1.desc":
        "Portafolio web responsivo con modo oscuro, versión bilingüe y exportación a PDF optimizada.",
      "proj.p2.name": "Uni Homework Project",
      "proj.p2.desc":
        "Plataforma de gestión de tareas universitarias con frontend y backend desarrollados por separado.",
      "proj.p3.name": "Little Lemon — Frontend",
      "proj.p3.desc":
        "Aplicación de reservas para restaurante. Proyecto capstone del certificado Meta Front-End Developer.",
      "proj.p4.name": "Little Lemon API — Backend",
      "proj.p4.desc":
        "API REST de menú y reservas con autenticación por token. Capstone del programa Meta Back-End.",
      "proj.p5.name": "Derechos",
      "proj.p5.desc":
        "Sitio editorial multipágina sobre derechos ciudadanos con diseño responsivo.",
      "proj.p6.name": "[EDITAR] EVA",
      "proj.p6.desc": "[EDITAR: descripción breve del proyecto EVA]",
      "proj.p7.name": "[EDITAR] CMS",
      "proj.p7.desc": "[EDITAR: descripción breve del CMS]",
      "comp.title": "Competencias Complementarias",
      "comp.item1":
        "<strong>Herramientas de Oficina:</strong> Manejo avanzado de Excel, Word y Microsoft Project para gestión de planes de trabajo.",
      "comp.item2":
        "<strong>Marketing Digital:</strong> Gestión de campañas publicitarias y administración de contenido en redes sociales.",
      "comp.item3":
        "<strong>Sistemas:</strong> Administración avanzada de Windows y Linux (Ubuntu Desktop/Server).",
      "btn.print": "Descargar PDF",
    },
    en: {
      "meta.title": "Kevin Cardoza | Systems Engineer | Frontend Developer",
      "contact.title": "Contact",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.location": "Location",
      "contact.availability": "Availability",
      "contact.availabilityValue": "Available for remote and hybrid work",
      "links.title": "Links",
      "ss.1": "Proactive Communication",
      "ss.2": "Analytical Thinking",
      "ss.3": "Collaborative Teamwork",
      "ss.4": "Time Management",
      "refs.title": "References",
      "langs.title": "Languages",
      "langs.es": "Spanish",
      "langs.esLevel": "Native",
      "langs.en": "English",
      "langs.enLevel": "Intermediate–Advanced · UC Irvine Certificate",
      "hero.title": "Information Systems Engineer",
      "hero.summary":
        'Systems Engineer graduated from the <strong>National University of Engineering (UNI)</strong>, with a solid logical foundation and analytical mindset. Experienced in developing modern, functional user interfaces. A constant self-learner, having earned international certifications in development and English grammar. Seeking to apply my technical skills and sense of responsibility in environments that challenge my engineering abilities.',
      "edu.title": "Education",
      "edu.degree1": "Information Systems Engineering",
      "edu.degree2": "High School Diploma in Sciences and Letters",
      "common.more": "View more",
      "exp.title": "Work Experience",
      "exp.job1.title": "Freelance Developer & Academic Consultant",
      "exp.job1.date": "2024 — Present",
      "exp.job1.b1":
        "Development of responsive web interfaces using modern frontend architectures.",
      "exp.job1.b2":
        "Technical advisory for academic projects, focused on the management and operation of information systems.",
      "exp.job1.b3":
        "Design and implementation of relational databases for custom solutions.",
      "exp.job2.title": "General Technical Assistant",
      "exp.job2.desc":
        "Development of work discipline, solving mechanical problems under pressure, and direct customer service.",
      "certs.title": "International Certifications",
      "certs.fe.year": "May 2026",
      "certs.fs.year": "Jul 2026",
      "certs.view": "View certificate ↗",
      "proj.title": "Projects",
      "proj.demo": "Demo ↗",
      "proj.code": "Code ↗",
      "proj.intro":
        '<span class="dev-prompt">kevin@dev:~$</span> Full-Stack developer passionate about clean code.<br><strong>Languages:</strong> JavaScript · Python · C#<br><strong>Frontend:</strong> React · <strong>Backend:</strong> Node.js<br><strong>Databases:</strong> MySQL · PostgreSQL · SQLite<br><br>These are the projects I have built.',
      "proj.p1.name": "Web CV / Portfolio",
      "proj.p1.desc":
        "Responsive portfolio website with dark mode, bilingual support and print-optimized PDF export.",
      "proj.p2.name": "Uni Homework Project",
      "proj.p2.desc":
        "University homework management platform with separately developed frontend and backend.",
      "proj.p3.name": "Little Lemon — Frontend",
      "proj.p3.desc":
        "Restaurant reservation app. Capstone project of the Meta Front-End Developer certificate.",
      "proj.p4.name": "Little Lemon API — Backend",
      "proj.p4.desc":
        "REST API for menu and reservations with token authentication. Meta Back-End capstone.",
      "proj.p5.name": "Derechos",
      "proj.p5.desc":
        "Multi-page editorial website about civil rights with responsive design.",
      "proj.p6.name": "[EDIT] LMS",
      "proj.p6.desc": "[EDIT: short description of the LMS project]",
      "proj.p7.name": "[EDIT] CMS",
      "proj.p7.desc": "[EDIT: short description of the CMS]",
      "comp.title": "Additional Skills",
      "comp.item1":
        "<strong>Office Tools:</strong> Advanced use of Excel, Word and Microsoft Project for work-plan management.",
      "comp.item2":
        "<strong>Digital Marketing:</strong> Management of advertising campaigns and social media content administration.",
      "comp.item3":
        "<strong>Systems:</strong> Advanced administration of Windows and Linux (Ubuntu Desktop/Server).",
      "btn.print": "Download PDF",
    },
  };

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = dict[el.getAttribute("data-i18n")];
      if (typeof val === "string") el.innerHTML = val;
    });
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    var label = document.getElementById("lang-label");
    if (label) label.textContent = lang === "es" ? "EN" : "ES";
  }

  var lang = getStored("lang") === "en" ? "en" : "es";
  applyLang(lang);

  var btnLang = document.getElementById("btn-lang");
  if (btnLang) {
    btnLang.addEventListener("click", function () {
      lang = lang === "es" ? "en" : "es";
      setStored("lang", lang);
      applyLang(lang);
    });
  }

  function syncThemeColor() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute(
      "content",
      root.getAttribute("data-theme") === "dark" ? "#0f172a" : "#1e40af"
    );
  }
  syncThemeColor();

  var btnTheme = document.getElementById("btn-theme");
  if (btnTheme) {
    btnTheme.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      setStored("theme", next);
      syncThemeColor();
    });
  }

  function applyDevMode(on) {
    root.setAttribute("data-devmode", on ? "on" : "off");
    var b = document.getElementById("btn-dev");
    if (!b) return;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  }

  applyDevMode(getStored("devmode") === "on");

  var btnDev = document.getElementById("btn-dev");
  if (btnDev) {
    btnDev.addEventListener("click", function () {
      var next = root.getAttribute("data-devmode") !== "on";
      applyDevMode(next);
      setStored("devmode", next ? "on" : "off");
    });
  }

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    var els = document.querySelectorAll("[data-reveal]");
    els.forEach(function (el) {
      el.classList.add("js-reveal");
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }
})();
