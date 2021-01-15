const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");

pedra.addEventListener("click", playRound);
papel.addEventListener("click", playRound);
tesoura.addEventListener("click", playRound);

function playRound(e) {
    const playerSelection = e.target.id.toLowerCase();
    const computerSelection = computerPlays();
    rodada(playerSelection, computerSelection);
}


function rodada(playerSelection, computerSelection) {
    if (playerSelection === 'pedra' && computerSelection === 'pedra') {
        alert('Empate ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        alert('Perdeu ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    } else if ((playerSelection === 'pedra' && computerSelection === 'tesoura')) {
        alert('Ganhou ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    }

    if (playerSelection === 'papel' && computerSelection === 'papel') {
        alert('Empate ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        alert('Perdeu ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        alert('Ganhou ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    }

    if (playerSelection === 'tesoura' && computerSelection === 'tesoura') {
        alert('Empate ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        alert('Perdeu ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        alert('Ganhou ! Você jogou: ' + playerSelection + ' e o computador jogou: ' + computerSelection);
    }
}



function computerPlays() {
    var opcoes = ['pedra', 'papel', 'tesoura']
    resultado = (opcoes[Math.floor(Math.random() * opcoes.length)].toLowerCase())

    const escolhaPc = document.querySelector("#escolhaPc")
    const escolhido = document.createElement("button");
    escolhido.classList.add('botao');
    escolhaPc.appendChild(escolhido);

    if (resultado == 'pedra') {
        escolhido.classList.add('pedra');
    } else if (resultado == 'papel') {
        escolhido.classList.add('papel');
    } else {
        escolhido.classList.add('tesoura');
    }
    return resultado
}


