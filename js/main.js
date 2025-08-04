let deckId = ''
fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
.then(res => res.json())
.then(data => {
  console.log(data)
  console.log(data.deck_id)
  deckId = data.deck_id
})
.catch(err => {
  console.log(`error: ${err}`)
})

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const val1 = cardValue(data.cards[0].value)
    const val2 = cardValue(data.cards[1].value)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image
    if(val1 > val2){
      document.querySelector('h3').innerText = 'Player 1 won!'
    }
    else if(val1 < val2){
      document.querySelector('h3').innerText = 'Player 2 won!'
    } else {
      document.querySelector('h3').innerText = 'WAR!'
    }
  })
  .catch(err => {
    console.log(`error: ${err}`)
  })
}

const cardValue= (val) => {
  if(val === 'ACE'){
    return 14
  } else if(val === 'KING'){
    return 13
  } else if(val === 'QUEEN'){
    return 12
  } else if(val === 'JACK'){
    return 11
  } else{
    return val
  }
}