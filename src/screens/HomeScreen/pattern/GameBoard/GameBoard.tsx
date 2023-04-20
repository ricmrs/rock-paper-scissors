import Box from "@/components/Box/Box";
import { useState } from "react";
import StepOnePlayerPick from "./StepOnePlayerPick";
import StepTwoHousePick from "./StepTwoHousePick";

export type Pick = "paper" | "rock" | "scissors";

export default function GameBoard() {
  const [gameStarted, setGameStarted] = useState(false)
  const [playersPicked, setPlayersPicked] = useState<Pick>()

  function startGame(e: React.MouseEvent){
    setGameStarted(true);
    const buttonPicked = e.currentTarget.getAttribute('name') as Pick;
    setPlayersPicked(buttonPicked!)
  }

  function renderStepGame(gameStarted: boolean) {
    if(!gameStarted) return <StepOnePlayerPick onClick={startGame}/>;
    return <StepTwoHousePick playersPicked={playersPicked!}/>;
  }

  return (
    <Box
      styleSheet={{
        backgroundImage: !gameStarted && 'url(./images/bg-triangle.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '80%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '55px',
        rowGap: '35px',
        justifyContent: 'center',
        height: '350px'
      }}>
        {renderStepGame(gameStarted)}
    </Box>
  )
}
