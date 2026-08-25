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
