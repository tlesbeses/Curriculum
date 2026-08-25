const certificates = [
  "img/degres/UniTitulo_pages-to-jpg-0001.jpg",
  "img/degres/UniTitulo_pages-to-jpg-0002.jpg",
  "img/degres/SecundariaTitulo_page-0001.jpg",
  "img/degres/Coursera A42NKNKZIAU9_page-0001.jpg",
  "img/degres/Coursera 8FGOCL4AKLVP_page-0001.jpg",
  "img/degres/Coursera JEARDKGGDD46_page-0001.jpg",
  "img/degres/Coursera P3V4O98HDHNQ_page-0001.jpg",
  "img/degres/CERTIFICATE_LANDING_PAGE~1XRV4LAR7NZ9.jpeg",
];

function loadCertificates() {
  const container = document.getElementById("print-certificates");
  if (!container || container.childElementCount > 0) return;

  certificates.forEach((src) => {
    const page = document.createElement("div");
    page.className = "certificate-page";

    const img = document.createElement("img");
    img.src = src;
    img.decoding = "async";
    img.alt = "Certificado";

    page.appendChild(img);
    container.appendChild(page);
  });
}

function preloadCertificates() {
  certificates.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

const btnPrint = document.querySelector(".btn-print");
if (btnPrint) {
  btnPrint.addEventListener("pointerenter", preloadCertificates, {
    once: true,
  });
  btnPrint.addEventListener("touchstart", preloadCertificates, {
    once: true,
  });
}

window.addEventListener("beforeprint", loadCertificates);
