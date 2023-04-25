import { Pick } from "../GameBoard";

export function housePickAnHand() {
  const hand = ["paper", "rock", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return hand[randomNumber] as Pick
}

function compareHands(playerHand: Pick, houseHand: Pick) {
  const win = { gameResult: 'You win!', gameScore: 1 }
  const draw = { gameResult: 'Draw!', gameScore: 0 }
  const lose = { gameResult: 'You lose!', gameScore: -1 }
  if (playerHand === houseHand) return draw;
  if (playerHand !== 'paper') {
    if (playerHand !== 'rock') {
      if (houseHand === 'rock') return lose;
      return win;
    }
    else if (houseHand === 'paper') return lose;
    return win;
  }
  else if (houseHand === 'scissors') return lose;
  return win;
}

export function finishGame(playersPicked: Pick, housesPicked: Pick | 'none') {
    if (housesPicked !== 'none') {
      return { ...compareHands(playersPicked, housesPicked), isGameFinished: true }
    }
    return { gameResult: '', gameScore: 0, isGameFinished: false }
}