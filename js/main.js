
var deck = [
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
        image: 'playingCards/AC.jpg'
    },
    {
        value: 11,
        image: 'playingCards/AD.jpg'
    },
    {
        value: 11,
        image: 'playingCards/AH.jpg'
    },
    {
        value: 11,
        image: 'playingCards/AS.jpg'
    },
    {
        value: 10,
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

let deckArray = deck.sort(() => Math.random() - 0.5);
const playOne = document.getElementById('play-1');
const playTwo = document.getElementById('play-2');
const dealerOne = document.getElementById('deal-1');
const dealerTwo = document.getElementById('deal-2');
const stayB = document.getElementById('stay');
const hitB = document.getElementById('hit');
const betFive = document.querySelector('#bet5');
const betTen = document.querySelector('#bet10');
const dealCounter = document.getElementById('deal-count');
const playCounter = document.getElementById('play-count');
const playMessage = document.getElementById('play-mess');
const dealerMessage = document.getElementById('deal-mess');
const cards = document.getElementsByTagName('img');
const buttons = document.getElementsByTagName('button');

let currentBet = '';
let balance    = 100;
let bet = false;
let playerHand = [];
let playerTotal = [];
let dealerHand = [];
let dealerTotal = [];
let playerAdd = 0;
let dealerAdd = 0;

stayB.disabled = true;
hitB.disabled = true;
betFive.disabled = false;
betTen.disabled = false;

betFive.addEventListener("click", function(){
    currentBet = 5;
    checkBalance(currentBet);
});
betTen.addEventListener("click", function(){
    currentBet = 10;
    checkBalance(currentBet);
});
hitB.addEventListener('click', hitHandler);
stayB.addEventListener('click', stayHandler);
function hitHandler(){
    var x = deck.pop()
    if(x.value === 11 && playerAdd < 11){
        x.value = 1;
    }
    playerHand.push(x);
    playerTotal.push(x.value);
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    for(let i = 2; i < playerHand.length; i++){
        document.querySelector(`#play-${i + 1}`).src = playerHand[i].image;
        document.querySelector(`#play-${i + 1}`).classList.remove('d-none');
    }
    playerTurn();
};
function stayHandler(){
    stayB.disabled = true;
    hitB.disabled = true;
    betFive.disabled = true;
    betTen.disabled = true;
    dealerTwo.src = dealerHand[1].image;
    dealerTurn();
    render();
};
function checkBalance(betAmount){
    if(balance < 5){
        playMessage.textContent = 'SORRY INSUFFICIENT FUNDS, GAME OVER!';
        return;
    } else{
        balance -= currentBet;
        bet = true;
        checkForTwentyOne()
    }
}
function checkForTwentyOne(){
    for(let i = 0; i < 4; i++){
        var x = deck.pop()
        if(i % 2 === 0){
            playerHand.push(x);
            playerTotal.push(x.value);
        } else {
            dealerHand.push(x);
            dealerTotal.push(x.value);
        };
  };
  playerAdd = playerTotal.reduce((a, b) => a + b, 0);
  showCards();
    if(playerAdd === 22){
        playerTotal[1].value = 1;
        bet = true;
        playerAdd = playerTotal.reduce((a, b) => a + b, 0);
        inBet();
        deal();
    }else if(playerAdd === 21){
        blackJack();
        return;
    }else{
        bet = true;
        inBet();
        deal();
    }
}
function blackJack(){
    playCounter.textContent = playerAdd;
    if(playerTotal[0] === 11 || playerTotal[1] === 11){
        if(playerTotal[0] === 10 || playerTotal[1] === 10){
            playMessage.textContent = "BLACKJACK!!!!"
            balance += currentBet * 2.5;
            window.setTimeout(newHand, 3000)
            render();
        }
    } else {
        playMessage.textContent = "21!!! YOU WIN!"
        balance += currentBet * 2;
        window.setTimeout(newHand, 3000)
        render();  
    }
}
function deal(){
    playMessage.textContent = 'YOUR MOVE.'
    showCards();
}
function showCards(){
    playOne.src = playerHand[0].image;
    playTwo.src = playerHand[playerHand.length - 1].image;
    dealerOne.src = dealerHand[0].image;
    dealerAdd = dealerHand[0].value;
    render();
}
function inBet(){
    betFive.disabled = true;
    betTen.disabled = true;
    stayB.disabled = false;
    hitB.disabled = false;
    bet = true;
}
function newHand(){
    stayB.disabled = true;
    hitB.disabled = true;
    betFive.disabled = false;
    betTen.disabled = false;
    for(let i = 2; i < playerHand.length; i++){
        document.querySelector(`#play-${i + 1}`).classList.add('d-none');
    }
    for(let i = 2; i < dealerHand.length; i++){
        document.querySelector(`#deal-${i + 1}`).classList.add('d-none');
    }
    playerHand = [];
    dealerHand = [];
    playerTotal = [];
    dealerTotal = [];
    playOne.src = '/playingCards/backImage.webp';
    playTwo.src = '/playingCards/backImage.webp';
    dealerOne.src = '/playingCards/backImage.webp';
    dealerTwo.src = '/playingCards/backImage.webp';
    playMessage.classList.remove("shuffle");
    playMessage.textContent = 'MAKE YOUR BET!'
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
    bet = false;
    render();
}
function playerTurn(){
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    if(playerAdd === 21){
        blackJack()
        return;
    } else if (playerAdd < 21){
        playMessage.textContent = 'HIT OR STAY? MAKE MY DAY.'
        render();
        return;
    } else{
        let doesHaveAce = false;
        for(let i = 0; i < playerTotal.length; i++){
            if(playerTotal[i] === 11 && playerAdd > 21){
            playerTotal[i] = 1;
            doesHaveAce = true;
            }
        }
        if(doesHaveAce === true){
            render();
            return;
        } else {
            dealerTwo.src = dealerHand[1].image;
            dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
            stayB.disabled = true;
            hitB.disabled = true;
            playMessage.textContent = 'BUST! MAKE YOUR NEXT BET.';
         window.setTimeout(newHand, 2500)
            render();
            return;  
        }
    }
}
function dealerTurn () {
        dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
        if( dealerAdd < 17){
            let x = deck.pop();
            let doesHaveAce = false;
            dealerHand.push(x);
            dealerTotal.push(x.value);
            dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
            for(let i = 2; i < dealerHand.length; i++){
                document.querySelector(`#deal-${i + 1}`).src = dealerHand[i].image;
                document.querySelector(`#deal-${i + 1}`).classList.remove('d-none');
            }
            for(let i = 0; i < dealerTotal.length; i++){
                if(dealerTotal[i] === 11 && dealerAdd > 21){
                dealerTotal[i] = 1;
                doesHaveAce = true;
                }
            }
            if(doesHaveAce === true){
                dealerTurn();
                return;
            }
            dealerTurn();
        } else {
            compareHands();
        }
};
function compareHands(){
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
    stayB.disabled = true;
    hitB.disabled = true;
    if(playerAdd === dealerAdd){
        balance += currentBet;
        playMessage.textContent = 'PUSH!'
        window.setTimeout(newHand, 3000)
    }
    if(dealerAdd > 21){
        balance += currentBet * 2;
        render();
        playMessage.textContent = 'YOU WIN THIS HAND! DEALER BUST!';
        window.setTimeout(newHand, 3000)
    } else if(playerAdd > dealerAdd){
        balance += currentBet * 2.5;
        playMessage.textContent = 'YOU WIN THIS HAND!';
        render();
        window.setTimeout(newHand, 3000)
    } else if(dealerAdd > playerAdd){
        playMessage.textContent = 'DEALER WINS THIS HAND!';
        render();
        window.setTimeout(newHand, 3000)
    }
}
function shuffle (){
    betFive.disabled = true;
    betTen.disabled = true;
    playMessage.classList.add("shuffle");
    playMessage.textContent = 'RESHUFFLING DECK.'
    deck = [
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
            value: 10,
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
    deckArray = deck.sort(() => Math.random() - 0.5);
    window.setTimeout(newHand, 2000);
};
function render(){
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    dealCounter.innerHTML = dealerAdd;
    playCounter.innerHTML = playerAdd;
    document.querySelector('#bet-amount').textContent = `$${currentBet}`;
    document.querySelector('#balance').textContent = `$${balance}`;
    if(deck.length < 25 && bet === false){
        buttons.disabled = true;
        shuffle();
    }
};

