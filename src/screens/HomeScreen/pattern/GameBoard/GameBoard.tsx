import Box from "@/components/Box/Box";
import { useState } from "react";
import StepOnePlayerPick from "./StepOnePlayerPick";
import StepTwoHousePick from "./StepTwoHousePick";
import StepThreeResult from "./StepThreeResult";

export default function GameBoard() {
  const [stepGame, setStepGame] = useState(1)
  const [playersPicked, setPlayersPicked] = useState<"paper" | "rock" | "scissors">()

  function startGame(e: React.MouseEvent){
    setStepGame(stepGame+1);
    const buttonPicked = e.currentTarget.getAttribute('name') as "paper" | "rock" | "scissors";
    setPlayersPicked(buttonPicked!)
  }

  function renderStepGame(param: number) {
    switch(param) {
      case 1:
        return <StepOnePlayerPick onClick={startGame}/>;
      case 2:
        return <StepTwoHousePick playersPicked={playersPicked!}/>;
      case 3:
        // return <StepThreeResult playersPicked={playersPicked!} />;
      default:
        return 'error'
    }
  }

  return (
    <Box
      styleSheet={{
        backgroundImage: stepGame === 1 ? 'url(./images/bg-triangle.svg)' : '',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '80%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '55px',
        rowGap: '35px',
        justifyContent: 'center'
      }}>
        {renderStepGame(stepGame)}
    </Box>
  )
}
