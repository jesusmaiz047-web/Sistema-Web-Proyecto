const modal = document.getElementById("modal-fullscreen");
const imagenGrande = document.getElementById("foto-grande");
const cerrar = document.getElementById("cerrar-modal");
    
const imagenesWeb = document.querySelectorAll(".imagen-contenedor");

const todasLasImagenes= document.querySelectorAll(".imagen-contenedor img");


todasLasImagenes.forEach(img => {
    img.onclick = function(){
        modal.style.display = "flex";
        const rutaLimpia = img.getAttribute("src");
        imagenGrande.src = rutaLimpia;
        
    }
})

modal.onclick = function(){
    modal.style.display = "none";
}

cerrar.addEventListener("click", (e) => {
  if(e.target !== imagenGrande) {
    modal.style.display = "none";
  }
});