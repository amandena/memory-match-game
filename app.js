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

  const grid = document.querySelector('.grid')

  // create your board
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', '/assets/luna.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  createBoard()
})