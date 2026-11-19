
// MENÚ RESPONSIVE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("activo");

  menuToggle.setAttribute("aria-expanded", abierto);
  menuToggle.setAttribute(
    "aria-label",
    abierto ? "Cerrar menú" : "Abrir menú"
  );

  menuToggle.innerHTML = abierto
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN

document.querySelectorAll(".nav-links a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("activo");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");

    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ANIMACIONES AL DESPLAZARSE

const reducirMovimiento = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !reducirMovimiento) {
  const elementos = document.querySelectorAll(
    ".seccion, .tarjeta, .tecnologia"
  );

  elementos.forEach((elemento) => {
    elemento.classList.add("revelar");
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.05
    }
  );

  elementos.forEach((elemento) => {
    observador.observe(elemento);
  });
}

// MENSAJE EN CONSOLA

console.log(
  "Portafolio de Joseph Itai Sebastian Lopez cargado correctamente."
);
