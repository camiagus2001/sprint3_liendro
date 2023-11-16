
document.addEventListener("DOMContentLoaded", function () {
    const serviceDetails = document.querySelectorAll(".service-details");

    serviceDetails.forEach(detail => {
        detail.style.display = "none";
    });

    // Agrega un evento clic a cada botón "Ver detalles"
    document.querySelectorAll(".toggle-details").forEach(button => {
        button.addEventListener("click", function () {
            const details = this.parentElement.querySelector(".service-details");

            // Muestra u oculta los detalles con animación
            if (details.style.display === "none") {
                details.style.display = "block";
                details.style.height = details.scrollHeight + "px";
            } else {
                details.style.height = 0;
                details.addEventListener("transitionend", function () {
                    details.style.display = "none";
                    details.style.height = "";
                }, { once: true });
            }
        });
    });
});