const certificates = [
  "img/degres/UniTitulo_pages-to-jpg-0001.jpg",
    "img/degres/UniTitulo_pages-to-jpg-0002.jpg",
    'img/degres/SecundariaTitulo_page-0001.jpg'
];

function loadCertificates(){

  const container = document.getElementById("print-certificates");
  container.innerHTML = "";

  certificates.forEach(src => {

    const page = document.createElement("div");
    page.className = "certificate-page";

    const img = document.createElement("img");
    img.src = src;

    page.appendChild(img);
    container.appendChild(page);

  });

}

function removeCertificates(){
  const container = document.getElementById("print-certificates");
  container.innerHTML = "";
}

window.addEventListener("beforeprint", loadCertificates);
window.addEventListener("afterprint", removeCertificates);