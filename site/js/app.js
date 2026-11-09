document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("download-apk");

  if (botao) {
    botao.href = "https://github.com/memphisdepayff-ui/HACKZONE/releases";
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
  }

  console.log("HACKZONE WEBSITE iniciado!");
});
