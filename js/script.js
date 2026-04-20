document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-fullscreen");
    const imagenGrande = document.getElementById("foto-grande");
    const cerrar = document.getElementById("cerrar-modal");

    const todasLasImagenes = document.querySelectorAll(".imagen-contenedor img");

    let escala = 1;

    todasLasImagenes.forEach(img => {
        img.onclick = function () {
            if (modal && imagenGrande) {
                modal.style.display = "flex";
                imagenGrande.src = img.src;
                escala = 1;
                imagenGrande.style.transform = `scale(${escala})`;
            }
        };
    });

    if (modal) {
        modal.addEventListener("wheel", (e) => {
            e.preventDefault();
            const velocidadZoom = 0.1;
            if (e.deltaY > 0) {
                escala -= velocidadZoom;
            } else {
                escala += velocidadZoom;
            }
            escala = Math.min(Math.max(0.5, escala), 4);
            if (imagenGrande) {
                imagenGrande.style.transform = `scale(${escala})`;
            }
        }, { passive: false });

        modal.onclick = function () {
            modal.style.display = "none";
        };
    }

    if (cerrar) {
        cerrar.addEventListener("click", (e) => {
            if (e.target !== imagenGrande) {
                modal.style.display = "none";
            }
        });
    }

 
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("active");

           
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (navLinks.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.replace("fa-times", "fa-bars");
                }
            });
        });

       
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.replace("fa-times", "fa-bars");
                }
            }
        });
    }
});