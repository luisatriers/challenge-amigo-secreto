//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo != "") {
        listaDeAmigos.push(amigo);
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
    console.log(listaDeAmigos);
}

function limparCampo(){
    document.querySelector('input').value = '';
}