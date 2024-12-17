// modal

const modal = document.querySelector(".modal");
const mascaraModal = document.querySelector(".mascara-mapa");

function mostrarModal() {
  modal.style.left = "50%";
  mascaraModal.style.visibility = "visible";
}

function esconderModal() {
  modal.style.left = "-50%";
  mascaraModal.style.visibility = "hidden";
}
