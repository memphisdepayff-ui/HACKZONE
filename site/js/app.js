document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("download-apk");

    if (botao) {
        botao.href = "https://github.com/memphisdepayff-ui/HACKZONE/releases/download/v1.1/app-debug.apk";
        botao.removeAttribute("target");
    }

    console.log("HACKZONE WEBSITE iniciado!");
});
