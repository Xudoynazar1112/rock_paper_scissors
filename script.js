window.addEventListener("DOMContentLoaded", function () {
    let choices = document.querySelectorAll('.choice');
    let scores = document.querySelector('.scores');
    let modal = document.querySelector('.modal');
    let result = document.querySelector('#result');
    let restart = document.querySelector('#restart');
    let scoreBoard = {
        player: 0,
        computer: 0,
        draw: 0
    };

    // Play game
    function play(event) {
        restart.style.display = 'block'
        let playerChoice = event.target.id
        console.log(playerChoice);
        let computerChoice = getComputerChoice()
        let winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice)
    }

    // GetComputerChoice
    function getComputerChoice() {
        const rand = Math.random()
        console.log(rand);
        if (rand < 0.34) {
            return 'fa-hand-back-fist'
        } else if (rand <= 0.67) {
            return 'fa-hand'
        } else {
            return 'fa-hand-scissors'
        }
    }

    // Get Winner
    function getWinner(p, c) {
        if (p === c) {
            return 'Draw'
        }
        else if (p === 'fa-hand-back-fist') {
            if (c === 'fa-hand') {
                return 'computer'
            }
            else {
                return 'player'
            }
        } else if (p === 'fa-hand') {
            if (c === 'fa-hand-scissors') {
                return 'computer'
            }
            else {
                return 'player'
            }
        } else if (p === 'fa-hand-scissors') {
            if (c === 'fa-hand-fist') {
                return 'computer'
            }
            else {
                return 'player'
            }
        }
    }

    // ShowWinner 
    function showWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
            result.innerHTML = `
                <h2 class="text_win">You win</h2>
                <i class="choice fa-solid ${computerChoice}"></i>
                <p>Computer choice <strong>${computerChoice}</strong></p>
            `
        }
        else if (winner === 'computer') {
            scoreBoard.computer++
            result.innerHTML = `
                <h2 class="text_lose">You lose</h2>
                <i class="choice fa-solid ${computerChoice}"></i>
                <p>Computer choice <strong>${computerChoice}</strong></p>
            `
        }
        else {
            scoreBoard.draw++
            result.innerHTML = `
                <h2>It is draw</h2>
                <i class="choice fa-solid ${computerChoice}"></i>
                <p>Computer choice <strong>${computerChoice}</strong></p>
            `
        }
        scores.innerHTML = `
            <p>Player: ${scoreBoard.player}</p>
            <p>Computer: ${scoreBoard.computer}</p>
            <p>Draw: ${scoreBoard.draw}</p>            
        `
        modal.style.display = 'block'
    }


    // RestartGame
    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        scoreBoard.draw = 0
        scores.innerHTML = `
            <p>Player: ${scoreBoard.player}</p>
            <p>Computer: ${scoreBoard.computer}</p>
            <p>Draw: ${scoreBoard.draw}</p>            
        `
    }

    // ClearModal
    function clearModal(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }

    // Evant Listener
    choices.forEach(choice => choice.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)
})