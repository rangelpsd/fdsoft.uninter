let botaozinho = document.querySelector("#botaozinho");
botaozinho.style.background="#87CEFA";

botaozinho.addEventListener("mouseover",e =>{botaozinho.style.background="#66CDAA";});

botaozinho.addEventListener("mouseout",e =>{botaozinho.style.background="#87CEFA";});

let mensagem = document.querySelector("#mensagem");

botaozinho.addEventListener("click", showMessage );

function showMessage(){
    mensagem.innerHTML = "A cada pequeno passo que você dá, está mais perto de algo extraordinário. Não desista!";
}
