//O querySelector serve para buscar um elemento dentro de uma referência (no caso desse código, a referência é o document que é nosso arquivo HTML). O querySelector pode buscar um seletor seja ele o elemento em si, sua classe ou id
//Criamos funções para podermos escolher quando executar o código que está dentro dela

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while (i < listaDeTeclas.length) {
    listaDeTeclas[i].onclick = function () {
        tocaSom('#som_tecla_pom')
    };

    i++;

    console.log(i);
}
