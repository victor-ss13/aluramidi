//O querySelector serve para buscar um elemento dentro de uma referência (no caso desse código, a referência é o document que é nosso arquivo HTML). O querySelector pode buscar um seletor seja ele o elemento em si, sua classe ou id
//Criamos funções para podermos escolher quando executar o código que está dentro dela



//Nossa função possui um parâmetro, ele deve ser preenchido quando executamos ela para que fucione corretamente
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//Essa const é nossa lista, utilizamos o querySelectorAll nela para que ela busque todas as teclas, pois elas dividem uma mesma classe que nesse caso é a classe "tecla"
const listaDeTeclas = document.querySelectorAll('.tecla');


//utilizamos uma estrutura de repetição onde declaramos a variável "contadora" dentro da estrutura em si
for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i]; //Pega a tecla referente ao índice em questão
    const instrumento = tecla.classList[1]; //Pega a segunda classe que cada tecla tem
    const idAudio = `#som_${instrumento}`; //Template string utilizado para formar o ID de cada áudio utilizando a segunda classe de cada tecla
    
    //Funcionalidade para executar a função com o referido parâmetro a partir do clique em cada tecla
    tecla.onclick = function () {
        tocaSom(idAudio)
    };

}
