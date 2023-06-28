// Create an card array of objects
const cardArray = [
    {
        name: 'bear',
        img: './images/animals/bear.png',
    },
    {
        name: 'crocodile',
        img: './images/animals/crocodile.png',
    },
    {
        name: 'penguin',
        img: './images/animals/penguin.png',
    },
    {
        name: 'pig',
        img: './images/animals/pig.png',
    },
    {
        name: 'narwhal',
        img: './images/animals/narwhal.png',
    },
    {
        name: 'zebra',
        img: './images/animals/zebra.png',
    },
    {
        name: 'bear',
        img: './images/animals/bear.png',
    },
    {
        name: 'crocodile',
        img: './images/animals/crocodile.png',
    },
    {
        name: 'penguin',
        img: './images/animals/penguin.png',
    },
    {
        name: 'pig',
        img: './images/animals/pig.png',
    },
    {
        name: 'narwhal',
        img: './images/animals/narwhal.png',
    },
    {
        name: 'zebra',
        img: './images/animals/zebra.png',
    }

]

// Randomly sorts Array
cardArray.sort(() => 0.5 - Math.random())

const gridDiplay = document.getElementById("grid")
const resultDisplay = document.getElementById("result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

// Create board displaying the cards
function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDiplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log('check for match')

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image')
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
    }


    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', './images/white.png')
        cards[optionTwoId].setAttribute('src', './images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }

    // Resets cards to blank if not a match
    else {
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
        alert('Sorry try again')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations'
    }
}
// Assigns card img from blank to card from array
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
