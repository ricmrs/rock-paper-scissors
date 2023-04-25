import Box from "@/components/Box/Box";
import { Dispatch, SetStateAction, useState } from "react";
import StepOnePlayerPick from "./StepOnePlayerPick";
import StepTwoHousePick from "./StepTwoHousePick";

export type Pick = "paper" | "rock" | "scissors";

interface GameBoardProps {
  handleChangeScore: Dispatch<SetStateAction<number>>;
}

export default function GameBoard({ handleChangeScore }: GameBoardProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [playersPicked, setPlayersPicked] = useState<Pick>();

  function startGame(e: React.MouseEvent){
    setGameStarted(true);
    const buttonPicked = e.currentTarget.getAttribute('name') as Pick;
    setPlayersPicked(buttonPicked!);
  }

  function restartGame(){
    setGameStarted(false);
  }

  function renderStepGame(gameStarted: boolean) {
    if(!gameStarted) return <StepOnePlayerPick onClick={startGame}/>;
    return (
      <StepTwoHousePick 
        playersPicked={playersPicked!} 
        restartGame={restartGame} 
        handleChangeScore={handleChangeScore}
      />
    );
  }

  return (
    <Box
      styleSheet={{
        backgroundImage: !gameStarted && 'url(./images/bg-triangle.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '80%',
        width: '350px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '20%',
        rowGap: '12%',
        justifyContent: 'center',
        height: '350px'
      }}>
        {renderStepGame(gameStarted)}
    </Box>
  )
}
