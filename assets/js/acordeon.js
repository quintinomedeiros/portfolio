document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todos os acordeons da página
  const acordeons = document.querySelectorAll(".acordeon");

  acordeons.forEach(acordeon => {
    const trigger = acordeon.querySelector(".acordeon_trigger");

    // Adiciona o evento de clique no botão
    trigger.addEventListener("click", () => {
      // Alterna (abre/fecha) o acordeon atual
      acordeon.classList.toggle("acordeon_open");
    });
  });
});
