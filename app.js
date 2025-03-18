let amigos = [];

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

function mostrarListaNaTela(){
    let lista = document.getElementById('listaAmigos');
    let itensLista = '';
    for (i = 0 ; i < amigos.length ; i++ ){
        itensLista = itensLista + `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = itensLista;
}

function sortearAmigo(){
    let quantidadeDeAmigos = amigos.length;
    // console.log(`A quantidade de amigos na lista é ${quantidadeDeAmigos}`);

    let numeroAleatorio = Math.floor(Math.random() * quantidadeDeAmigos);
    // console.log(`O índice aleatório gerado é ${numeroAleatorio}`);

    let amigoSorteado = amigos[numeroAleatorio];

    if (amigos != '') {

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Seu amigo secreto é: ${amigoSorteado}!`;
    } else {
        alert('Não foi possível sortear. Por favor, insira alguns nomes antes.');
    }
}