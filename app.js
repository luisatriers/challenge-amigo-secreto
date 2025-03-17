//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.


function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo != '') {
        listaDeAmigos.push(amigo);
        limparCampo();
        contador++;

        mostraLista(contador);

    } else {
        alert('Por favor, insira um nome.');
    }
    // console.log(listaDeAmigos);
    return contador;
}

function limparCampo(){
    document.querySelector('input').value = '';
}

//Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.

let lista = document.getElementById('listaAmigos');
let conteudoLista = '';
lista.innerHTML = conteudoLista;
let contador = -1;

function mostraLista(contador){
    let itemLista = `<li>${listaDeAmigos[contador]}</li>`;
    conteudoLista = conteudoLista + itemLista;
    lista.innerHTML = conteudoLista;
}




