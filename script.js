const eventosModal = document.getElementById("eventosModal");
const coisasModal = document.getElementById("coisasModal");
const sobreModal = document.getElementById("sobreModal");

const eventosBtn = document.getElementById("eventosBtn");
const coisasBtn = document.getElementById("coisasBtn");
const sobreBtn = document.getElementById("sobreBtn");

const closeEventos = document.getElementById("closeEventos");
const closeCoisas = document.getElementById("closeCoisas");
const closeSobre = document.getElementById("closeSobre");

eventosBtn.onclick = function() {
  eventosModal.style.display = "block";
}

coisasBtn.onclick = function() {
  coisasModal.style.display = "block";
}

sobreBtn.onclick = function() {
  sobreModal.style.display = "block";
}

closeEventos.onclick = function() {
  eventosModal.style.display = "none";
}

closeCoisas.onclick = function() {
  coisasModal.style.display = "none";
}

closeSobre.onclick = function() {
  sobreModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == eventosModal) {
    eventosModal.style.display = "none";
  } else if (event.target == coisasModal) {
    coisasModal.style.display = "none";
  } else if (event.target == sobreModal) {
    sobreModal.style.display = "none";
  }
}

