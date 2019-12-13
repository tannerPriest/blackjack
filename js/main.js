console.log('Connected');
const deck = [
    {
        value: 2,
        image: 'playingCards/2C.jpg'
    },
    {
        value: 2,
        image: 'playingCards/2D.jpg'
    },
    {
        value: 2,
        image: 'playingCards/2H.jpg'
    },
    {
        value: 2,
        image: 'playingCards/2S.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3C.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3D.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3H.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3S.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4C.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4D.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4H.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4S.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5C.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5D.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5H.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5S.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6C.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6D.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6H.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6S.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7C.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7D.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7H.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7S.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8C.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8D.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8H.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8S.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9C.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9D.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9H.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9S.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10C.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10D.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10H.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10C.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AC.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AD.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AH.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AS.jpg'
    },
    {
        value: 11,
        image: 'playingCards/JC.jpg'
    },
    {
        value: 10,
        image: 'playingCards/JD.jpg'
    },
    {
        value: 10,
        image: 'playingCards/JH.jpg'
    },
    {
        value: 10,
        image: 'playingCards/JS.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KC.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KD.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KH.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KS.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QC.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QD.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QH.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QS.jpg'
    }
];
console.log(deck[40].image);

let currentBet = '';
let balance    = 100;
let inTurn = false;
let playHand = [];
let dealerHand = [];

const playTwo = document.getElementById('play-2');
const playOne = document.getElementById('play-1');
const dealerOne = document.getElementById('deal-1');
const dealerTwo = document.getElementById('deal-2');
const stayB = document.getElementById('stay');
const hitB = document.getElementById('hit');
const betFive = document.querySelector('#bet5');
const betTen = document.querySelector('#bet10');

stayB.disabled = true;
hitB.disabled = true;
const noClick = document.createAttribute("disabled")

const init = () => {
    currentBet = ''
    balance = 100
    document.querySelectorAll('img').src = '/playingCards/backImage.webp';
    betFive.disabled = false;
    betTen.disabled = false;
    stayB.disabled = true;
    hitB.disabled = true;
}

betFive.addEventListener("click", function(){
    currentBet = 5;
    balance -= 5;
    stayB.disabled = false;
    hitB.disabled = false;
    inTurn = true
    deal();
    render();
});
betTen.addEventListener("click", function(){
    currentBet = 10;
    balance -= 10;
    stayB.disabled = false;
    hitB.disabled = false;
    inTurn = true;
    deal();
    render();
});

function deal(){
    let x = deck[Math.floor(Math.random() * deck.length)]
}

function render(){
    betTen.disabled = true;
    betFive.disabled = true;
    document.querySelector('#bet-amount').textContent = `$${currentBet}`;
    document.querySelector('#balance').textContent = `$${balance}`;
}
hitB.addEventListener('click', function(){

});
stayB.addEventListener('click', function(){
});

