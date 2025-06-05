// Habilitar reproducción automática en segundo plano
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  audio.play().catch(err => {
    console.log("Autoplay bloqueado:", err);
  });
});
