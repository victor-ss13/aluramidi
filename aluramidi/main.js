//O querySelector serve para buscar um elemento dentro de uma referência (no caso desse código, a referência é o document que é nosso arquivo HTML). O querySelector pode buscar um seletor seja ele o elemento em si, sua classe ou id
//Criamos funções para podermos escolher quando executar o código que está dentro dela

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while (i < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    
    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    i++;

    console.log(i);
}
