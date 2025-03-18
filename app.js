//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo != '') {
        amigos.push(amigo);
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
    }
    mostrarListaNaTela();
}

function limparCampo(){
    document.querySelector('input').value = '';
}

//Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.

let lista = document.getElementById('listaAmigos');

function mostrarListaNaTela(){
    let itensLista = '';
    for (i = 0 ; i < amigos.length ; i++ ){
        itensLista = itensLista + `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = itensLista;
}

// Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.

// Use Math.random() e Math.floor() para obter um índice aleatório.
// Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.



// Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

// Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

// Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.