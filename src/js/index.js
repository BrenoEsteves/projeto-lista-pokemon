// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - verificar se o body ja tem o modo-scuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    //refaturado
   // body.classList.toggle("modo-escuro");


    if (modoEscuroEstaAtivo) {
        // passo 7 remover a classo do modo-escuor do body
        body.classList.remove("modo-escuro");
        //passo 8 - trocar imagem do botão alterar tema para o sol
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        //passo 4 -  adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");
        //passo 5 - trocar a imagem do botão de sol para lua
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
});