let listaRandomN = [];
let numeroLimite = 10;
let randomNumber = randomN();
let tries = 0;

// função de número aleatório
function randomN() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let listaTotal = listaRandomN.length;
    if (listaTotal == numeroLimite) {
        listaRandomN = [];
    }

    if (listaRandomN.includes(numeroEscolhido)) {
        return randomN();
    } else {
        listaRandomN.push(numeroEscolhido);
        return numeroEscolhido
    }
}

// função para colocar texto em HTML
function textoTela (tag, texto) {
    let x = document.querySelector(tag);
    x.innerHTML = texto;
}

// função do botão chutar


function buttonCheck () {
        tries++ 
        let guess = document.querySelector('input').value;
        if (guess == randomNumber) {
            textoTela('h1', 'Acertou!');
            let textoTries = tries > 1 ? 'tentativas' : 'tentativa';  
            let textoAcerto = `Você descobriu o número sereto com ${tries} ${textoTries}`;
            textoTela('p', textoAcerto);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (guess < randomNumber) {
                textoTela('p', 'Numero é maior');
            } else {
                textoTela('p', 'Numero é menor');
            }
            emptyField()
        }
}
//
function emptyField () {
    guess = document.querySelector('input')
    guess.value = ''
}

// função do botão Novo Jogo
function buttonRestart() {
    emptyField();
    textoInical();
    randomNumber = randomN();
    tries = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(listaRandomN);
}
// função do texto inicial do jogo
function textoInical() {
    textoTela('h1', 'Jogo do número secreto');
    textoTela('p', 'Advinhe um numero entre 1 e 10');  
}

textoInical()
console.log(listaRandomN);