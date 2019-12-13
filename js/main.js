console.log('Connected');
let currentBet = '';
let balance    = 100;
let playTwo = document.getElementById('play-2');
let playOne = document.getElementById('play-1');

const init = () => {
    currentBet = ''
    balance = 100
    document.getElementsByTagName('img').src = '/playingCards/backImage.webp';
}

const betFive = document.querySelector('#bet5').addEventListener("click", function(){
    currentBet = 5;
    balance -= 5;
    playTwo.setAttribute("src", "");
    render();
});
const betTen = document.querySelector('#bet10').addEventListener("click", function(){
    currentBet = 10;
    balance -= 10;
    // playOne.src = "./playingCards/AH.jpg";
    playOne.style.backgroundImage = `url(${playingCards/backImage.webp})`
    render();
});
function render(){
    console.log(`You bet $${currentBet}`)
    document.querySelector('#bet-amount').textContent = `$${currentBet}`;
    document.querySelector('#balance').textContent = `$${balance}`;
}

