document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'jupiter',
      img: '/assets/jupiter.png'
    },
    {
      name: 'jupiter',
      img: '/assets/jupiter.png'
    },
    {
      name: 'mars',
      img: '/assets/mars.png'
    },
    {
      name: 'mars',
      img: '/assets/mars.png'
    },
    {
      name: 'mercury',
      img: '/assets/mercury.png'
    },
    {
      name: 'mercury',
      img: '/assets/mercury.png'
    },
    {
      name: 'neptune',
      img: '/assets/neptune.png'
    },
    {
      name: 'neptune',
      img: '/assets/neptune.png'
    },
    {
      name: 'sailormoon',
      img: '/assets/sailormoon.png'
    },
    {
      name: 'sailormoon',
      img: '/assets/sailormoon.png'
    },
    {
      name: 'tuxedomask',
      img: '/assets/tuxedomask.png'
    },
    {
      name: 'tuxedomask',
      img: '/assets/tuxedomask.png'
    },
    {
      name: 'uranus',
      img: '/assets/uranus.png'
    },
    {
      name: 'uranus',
      img: '/assets/uranus.png'
    },
    {
      name: 'venus',
      img: '/assets/venus.png'
    },
    {
      name: 'venus',
      img: '/assets/venus.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  // create your board
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', '/assets/luna.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // check for match
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!')
      cards[optionOneId].setAttribute('src', '/assets/artemis.png')
      cards[optionTwoId].setAttribute('src', '/assets/artemis.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '/assets/luna.png')
      cards[optionTwoId].setAttribute('src', '/assets/luna.png')
      alert('No match. Please try again.')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congrats! You got em all!'
    }
  }

  // flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})