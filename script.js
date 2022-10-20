typeWriter();

function typeWriter() {
    const elemento = document.querySelector("h1");
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => (elemento.innerHTML += letra), 100 * i);
    });
}

// função pra criar botão voltar a tela no canto direito final da pagina
const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});