/*
Control Menu Hamburguesa
*/

const menu_hamburguer = document.querySelector(".hamburger");
const menu_lateral = document.querySelector(".menu_lateral");

const menu_lateral_close_button = document.querySelector(
  ".menu_lateral .contenedor .menu_lateral_close"
);

menu_hamburguer.addEventListener("click", () => {
  document.getElementById("hamburger-1").classList.toggle("is-active");

  menu_lateral.classList.toggle("active");
});

menu_lateral_close_button.addEventListener("click", () => {
  menu_hamburguer.click();
});

/*
Control formulario
*/
const submit = document.getElementById("form");
submit.addEventListener("submit", (evento) => {
  evento.preventDefault();
  alert("El mensaje ha sido enviado");
});
/*
Manejo Boton Scroll Top
*/
window.onscroll = function () {
  mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
  const botonScroll = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonScroll.style.opacity = "1";
  } else {
    botonScroll.style.opacity = "0";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE y Opera
}
