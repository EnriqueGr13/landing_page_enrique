// ----- MENÚ HAMBURGUESA -----
document.querySelector(".bars").addEventListener("click", function () {
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
});

// ----- ICONO DE ESTRELLA -----
document.addEventListener("DOMContentLoaded", function () {
    let estrellas = document.querySelectorAll(".estrella");
    estrellas.forEach(function (estrella) {
        estrella.addEventListener("click", function () {
            this.classList.toggle("fa-regular");
            this.classList.toggle("fa-solid");
        });
    });
});

// ----- SWIPER -----
document.addEventListener("DOMContentLoaded", function () {
    let swipers = document.querySelectorAll(".mySwiper");
    swipers.forEach(function (swiperEl) {
        new Swiper(swiperEl, {
            navigation: {
                nextEl: swiperEl.querySelector(".swiper-button-next"),
                prevEl: swiperEl.querySelector(".swiper-button-prev"),
            },
            pagination: {
                el: swiperEl.querySelector(".swiper-pagination"),
                clickable: true,
            },
            mousewheel: true,
            keyboard: true,
        });
    });
});

// ----- FORMULARIO DE CONTACTO -----
document.querySelector("#contacto-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const apellidos = document.querySelector("#apellidos").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const email = document.querySelector("#email").value.trim();
    const comentario = document.querySelector("#comentario").value.trim();

    const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñÁÉÍÓÚÑ\s]{1,}$/;
    const regexTelefono = /^\+?[1-9][0-9]{7,14}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let formValido = true;

    const mostrarError = (id, mensaje) => {
        const errorElement = document.querySelector(`#${id}-error`);
        errorElement.textContent = mensaje;
        errorElement.classList.remove("invisible");
        errorElement.classList.add("error");
        formValido = false;
    };

    const ocultarError = (id) => {
        const errorElement = document.querySelector(`#${id}-error`);
        errorElement.textContent = "";
        errorElement.classList.remove("error");
        errorElement.classList.add("invisible");
    };

    if (!regexNombre.test(nombre)) {
        mostrarError("nombre", "El nombre debe empezar con mayúscula y solo contener letras.");
    } else {
        ocultarError("nombre");
    }

    if (!regexNombre.test(apellidos)) {
        mostrarError("apellidos", "Los apellidos deben empezar con mayúscula y solo contener letras.");
    } else {
        ocultarError("apellidos");
    }

    if (!regexTelefono.test(telefono)) {
        mostrarError("telefono", "El teléfono debe contener entre 8 y 15 dígitos.");
    } else {
        ocultarError("telefono");
    }

    if (!regexEmail.test(email)) {
        mostrarError("email", "El email debe tener un formato válido (ejemplo@correo.com).");
    } else {
        ocultarError("email");
    }

    if (comentario === "") {
        mostrarError("comentario", "El comentario no puede estar vacío.");
    } else {
        ocultarError("comentario");
    }

    if (formValido) {
        const exitoMensaje = document.querySelector("#exito-mensaje");
        exitoMensaje.classList.remove("invisible");
        exitoMensaje.classList.add("exito");
    
        document.querySelector("#contacto-form").reset();
    } else {
        document.querySelector("#exito-mensaje").classList.add("invisible");
    }
});

// ----- BOTÓN SCROLL ARRIBA -----
document.addEventListener("DOMContentLoaded", function () {
    const scrollArriba = document.getElementById("scrollArriba");

    scrollArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
