function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const gameContainer = document.getElementById('game-container');
    
    // Esconde os botões depois da primeira escolha
    const buttons = gameContainer.querySelectorAll('button');
    buttons.forEach(button => button.style.display = 'none');
    
    // Mudança de história com base na escolha do jogador
    if (choice === 'luz') {
        storyText.textContent = "Você escolheu o Caminho da Luz. Você encontra uma fada que te oferece uma missão mágica!";
        setTimeout(() => {
            storyText.textContent += " Você aceita e começa uma nova aventura!";
        }, 2000);
    } else if (choice === 'sombra') {
        storyText.textContent = "Você escolheu o Caminho Sombrio. No final do túnel, você encontra um dragão!";
        setTimeout(() => {
            storyText.textContent += " O dragão te desafia para uma luta!";
        }, 2000);
    }
    
    // Após 4 segundos, reinicia o jogo
    setTimeout(() => {
        restartGame();
    }, 5000);
}

function restartGame() {
    const storyText = document.getElementById('story-text');
    const gameContainer = document.getElementById('game-container');
    
    // Restaura a história inicial
    storyText.textContent = "Você está em uma floresta. Escolha o caminho à frente:";
    
    // Exibe os botões novamente
    const buttons = gameContainer.querySelectorAll('button');
    buttons.forEach(button => button.style.display = 'inline-block');
}
