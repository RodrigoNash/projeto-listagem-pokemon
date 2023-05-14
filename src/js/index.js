/*Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua*/

// Passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema)

//Passo 2 - dar um jeito de pegar no JS o elemento HTML corrspondente ao tema
const body = document.querySelector("body")
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //Passo 6 - Verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        //Passo 7 - remover a classe do modo-escuro do body

        // Passo 8 trocar a imagem do botão de alterar tema para sol
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");

    } else {
        //Passo 4 - Adicionar a classe modo-escuro no body
        //Passo 5 - Trocar a imagem do botão de alterar tema para lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

        //Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro
    }



})

