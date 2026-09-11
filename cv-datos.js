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
      "meta.title": "Kevin Cardoza | Ingeniero en Sistemas | Análisis de Datos",
      "contact.title": "Contacto",
      "contact.phone": "Teléfono",
      "contact.email": "Email",
      "contact.location": "Ubicación",
      "contact.availability": "Disponibilidad",
      "contact.availabilityValue": "Disponible para trabajo remoto e híbrido",
      "links.title": "Enlaces",
      "links.cvweb": "CV Desarrollador",
      "skills.title": "Habilidades",
      "skills.tag1": "Excel · Avanzado",
      "skills.tag2": "SQL · MySQL · PostgreSQL · SQL Server",
      "skills.tag3": "Python",
      "skills.tag4": "C#",
      "skills.tag5": "JavaScript · HTML · CSS",
      "skills.tag6": "Git / GitHub",
      "skills.tag7": "Linux / Windows",
      "skills.tag8": "Finanzas · contabilidad y costos",
      "ss.title": "Competencias Personales",
      "ss.1": "Comunicación Proactiva",
      "ss.2": "Pensamiento Analítico",
      "ss.3": "Excelencia Operativa",
      "ss.4": "Orientación al Cliente",
      "ss.5": "Resolución Creativa de Problemas",
      "ss.6": "Preocupación por el Orden y la Calidad",
      "ss.7": "Trabajo Colaborativo",
      "refs.title": "Referencias",
      "langs.title": "Idiomas",
      "langs.es": "Español",
      "langs.esLevel": "Nativo",
      "langs.en": "Inglés",
      "langs.enLevel": "Intermedio–avanzado · Certificado UC Irvine",
      "hero.title": "Ingeniero en Sistemas · Analista de Datos (en formación)",
      "hero.summary":
        'Ingeniero en Sistemas de Información graduado de la <strong>Universidad Nacional de Ingeniería (UNI)</strong> con sólida base lógica, estadística y analítica. Manejo avanzado de Excel y SQL (MySQL, PostgreSQL, SQL Server), conocimientos financieros básicos de contabilidad y costos, y experiencia en el diseño y modelado de bases de datos relacionales. Me encuentro en formación activa en Power BI, herramienta de inteligencia de negocio. Busco iniciar mi carrera como Analista de Datos, aportando excelencia operativa, orientación al cliente y rigor en el orden y la calidad de la información para el análisis de ventas y KPIs comerciales.',
      "edu.title": "Educación",
      "edu.degree1": "Ingeniería en Sistemas de Información",
      "edu.degree2": "Bachillerato en Ciencias y Letras",
      "common.more": "Ver más",
      "exp.title": "Experiencia Laboral",
      "exp.job1.title": "Desarrollador Freelance & Consultor Académico",
      "exp.job1.date": "2024 — Presente",
      "exp.job1.b1":
        "Diseño y modelado de bases de datos relacionales (MySQL, PostgreSQL, SQL Server) para sistemas de registro y consulta de información.",
      "exp.job1.b2":
        "Asesoría técnica en proyectos monográficos, enfocada en la gestión y operación de sistemas de información.",
      "exp.job1.b3":
        "Desarrollo de interfaces web y herramientas que facilitan la captura y visualización de datos.",
      "exp.job2.title": "Asistente Técnico General",
      "exp.job2.desc":
        "Atención directa al cliente, resolución de problemas mecánicos bajo presión y desarrollo de orden y disciplina laboral.",
      "proj.title": "Proyectos",
      "proj.demo": "Demo ↗",
      "proj.code": "Código ↗",
      "proj.p1.name": "EVA",
      "proj.p1.desc":
        "Sistema de gestión propio, en uso activo, para el registro, control y consulta de información operativa.",
      "proj.p2.name": "CMS",
      "proj.p2.desc":
        "Sistema propio de administración de contenido en uso para la gestión de información digital.",
      "proj.p3.name": "CV Web / Portafolio",
      "proj.p3.desc":
        "Portafolio web responsivo con modo oscuro, versión bilingüe y exportación a PDF optimizada.",
      "proj.p4.name": "Uni Homework Project",
      "proj.p4.desc":
        "Plataforma de gestión de tareas universitarias con frontend y backend desarrollados por separado.",
      "proj.p5.name": "Little Lemon — Frontend",
      "proj.p5.desc":
        "Aplicación de reservas para restaurante. Proyecto capstone del certificado Meta Front-End Developer.",
      "proj.p6.name": "Little Lemon API — Backend",
      "proj.p6.desc":
        "API REST de menú y reservas con autenticación por token. Capstone del programa Meta Back-End.",
      "proj.p7.name": "Derechos",
      "proj.p7.desc":
        "Sitio editorial multipágina sobre derechos ciudadanos con diseño responsivo.",
      "train.title": "Formación en Curso",
      "train.i1":
        "<strong>Power BI:</strong> conocimiento conceptual del flujo de datos (conectar fuentes Excel/BD, limpiar, modelar y publicar reportes); formación práctica en curso.",
      "certs.title": "Certificaciones Internacionales",
      "certs.fe.year": "may. 2026",
      "certs.fs.year": "jul. 2026",
      "certs.view": "Ver certificado ↗",
      "comp.title": "Competencias Complementarias",
      "comp.item1":
        "<strong>Herramientas de Oficina:</strong> Microsoft Excel avanzado (tablas dinámicas, fórmulas y análisis), Word y Microsoft Project para gestión de planes de trabajo.",
      "comp.item2":
        "<strong>Conocimientos Financieros Básicos:</strong> contabilidad y costos (formación universitaria).",
      "comp.item3":
        "<strong>Marketing Digital:</strong> gestión de campañas publicitarias y administración de contenido en redes sociales.",
      "comp.item4":
        "<strong>Sistemas:</strong> administración avanzada de Windows y Linux (Ubuntu Desktop/Server).",
      "btn.print": "Descargar PDF",
    },
    en: {
      "meta.title": "Kevin Cardoza | Systems Engineer | Data Analysis",
      "contact.title": "Contact",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.location": "Location",
      "contact.availability": "Availability",
      "contact.availabilityValue": "Available for remote and hybrid work",
      "links.title": "Links",
      "links.cvweb": "Developer CV",
      "skills.title": "Skills",
      "skills.tag1": "Excel · Advanced",
      "skills.tag2": "SQL · MySQL · PostgreSQL · SQL Server",
      "skills.tag3": "Python",
      "skills.tag4": "C#",
      "skills.tag5": "JavaScript · HTML · CSS",
      "skills.tag6": "Git / GitHub",
      "skills.tag7": "Linux / Windows",
      "skills.tag8": "Finance · accounting and costs",
      "ss.title": "Personal Competencies",
      "ss.1": "Proactive Communication",
      "ss.2": "Analytical Thinking",
      "ss.3": "Operational Excellence",
      "ss.4": "Customer Focus",
      "ss.5": "Creative Problem Solving",
      "ss.6": "Concern for Order and Quality",
      "ss.7": "Collaborative Teamwork",
      "refs.title": "References",
      "langs.title": "Languages",
      "langs.es": "Spanish",
      "langs.esLevel": "Native",
      "langs.en": "English",
      "langs.enLevel": "Intermediate–Advanced · UC Irvine Certificate",
      "hero.title": "Systems Engineer · Data Analyst (in training)",
      "hero.summary":
        'Systems Engineer graduated from the <strong>National University of Engineering (UNI)</strong>, with a solid logical, statistical and analytical foundation. Advanced Excel and SQL skills (MySQL, PostgreSQL, SQL Server), basic financial knowledge in accounting and costs, and experience designing and modelling relational databases. Actively training in Power BI, a business intelligence tool. Seeking to start a career as a Data Analyst, bringing operational excellence, customer focus and rigor in the order and quality of information for sales analysis and commercial KPIs.',
      "edu.title": "Education",
      "edu.degree1": "Information Systems Engineering",
      "edu.degree2": "High School Diploma in Sciences and Letters",
      "common.more": "View more",
      "exp.title": "Work Experience",
      "exp.job1.title": "Freelance Developer & Academic Consultant",
      "exp.job1.date": "2024 — Present",
      "exp.job1.b1":
        "Design and modelling of relational databases (MySQL, PostgreSQL, SQL Server) for information recording and query systems.",
      "exp.job1.b2":
        "Technical advisory for academic projects, focused on the management and operation of information systems.",
      "exp.job1.b3":
        "Development of web interfaces and tools that facilitate data capture and visualization.",
      "exp.job2.title": "General Technical Assistant",
      "exp.job2.desc":
        "Direct customer service, solving mechanical problems under pressure, and developing order and work discipline.",
      "proj.title": "Projects",
      "proj.demo": "Demo ↗",
      "proj.code": "Code ↗",
      "proj.p1.name": "EVA",
      "proj.p1.desc":
        "In-house management system, actively in use, for recording, controlling and querying operational information.",
      "proj.p2.name": "CMS",
      "proj.p2.desc":
        "In-house content management system in use for managing digital information.",
      "proj.p3.name": "Web CV / Portfolio",
      "proj.p3.desc":
        "Responsive portfolio website with dark mode, bilingual support and print-optimized PDF export.",
      "proj.p4.name": "Uni Homework Project",
      "proj.p4.desc":
        "University homework management platform with separately developed frontend and backend.",
      "proj.p5.name": "Little Lemon — Frontend",
      "proj.p5.desc":
        "Restaurant reservation app. Capstone project of the Meta Front-End Developer certificate.",
      "proj.p6.name": "Little Lemon API — Backend",
      "proj.p6.desc":
        "REST API for menu and reservations with token authentication. Meta Back-End capstone.",
      "proj.p7.name": "Derechos",
      "proj.p7.desc":
        "Multi-page editorial website about civil rights with responsive design.",
      "train.title": "Current Training",
      "train.i1":
        "<strong>Power BI:</strong> conceptual knowledge of the data flow (connect Excel/database sources, clean, model and publish reports); practical training in progress.",
      "certs.title": "International Certifications",
      "certs.fe.year": "May 2026",
      "certs.fs.year": "Jul 2026",
      "certs.view": "View certificate ↗",
      "comp.title": "Additional Skills",
      "comp.item1":
        "<strong>Office Tools:</strong> Advanced Microsoft Excel (pivot tables, formulas and analysis), Word and Microsoft Project for work-plan management.",
      "comp.item2":
        "<strong>Basic Financial Knowledge:</strong> accounting and costs (university training).",
      "comp.item3":
        "<strong>Digital Marketing:</strong> management of advertising campaigns and social media content administration.",
      "comp.item4":
        "<strong>Systems:</strong> advanced administration of Windows and Linux (Ubuntu Desktop/Server).",
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