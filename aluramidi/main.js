//O querySelector serve para buscar um elemento dentro de uma referência (no caso desse código, a referência é o document que é nosso arquivo HTML). O querySelector pode buscar um seletor seja ele o elemento em si, sua classe ou id
//Criamos funções para podermos escolher quando executar o código que está dentro dela

function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');   
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
