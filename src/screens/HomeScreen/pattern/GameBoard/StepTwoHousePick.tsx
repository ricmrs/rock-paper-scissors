import Box from "@/components/Box/Box";
import GameButton from "./GameButton";
import Text from "@/components/Text/Text";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import StepThreeResult from "./StepThreeResult";
import { Pick } from "./GameBoard";
import { finishGame, housePickAnHand } from "./utils/gamemoves";

interface StepTwoHousePickProps {
  playersPicked: Pick;
  restartGame: () => void;
  handleChangeScore: Dispatch<SetStateAction<number>>
}

interface FinishGameProps {
  gameResult: string;
  gameScore: number;
  isGameFinished: boolean;
}

export default function StepTwoHousePick({ playersPicked, restartGame, handleChangeScore }: StepTwoHousePickProps) {
  const [housesPicked, setHousesPicked] = useState<Pick | "none">("none");
  const [gameFinished, setGameFinished] = useState(false);
  const [result, setResult] = useState('');

  const boxStyles = {
    alignItems: 'center',
    gap: '15px'
  }

  const textStyles = {
    textTransform: 'uppercase',
    color: '#FFF'
  }

  useEffect(() => {
    setTimeout(() => setHousesPicked(housePickAnHand), 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const { gameResult, gameScore, isGameFinished }: FinishGameProps = finishGame(playersPicked, housesPicked);
      handleChangeScore(initialValue => initialValue+gameScore);
      setResult(gameResult);
      setGameFinished(isGameFinished);
    }, 1000);
  }, [playersPicked, housesPicked, handleChangeScore])

  return (
    <>
      <Box styleSheet={{ flexDirection: 'column', alignItems: 'center', height: '350px', justifyContent: 'space-between', width: '100%' }}>
        <Box styleSheet={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Box styleSheet={{ ...boxStyles }}>
            <GameButton variant={playersPicked} />
            <Text styleSheet={{ ...textStyles }}>You picked</Text>
          </Box>
          <Box styleSheet={{ ...boxStyles }}>
            <GameButton variant={housesPicked} />
            <Text styleSheet={{ ...textStyles }}>The House picked</Text>
          </Box>
        </Box>
        {gameFinished &&
          <StepThreeResult 
            result={result}
            restartGame={restartGame} 
          />
        }
      </Box>

    </>
  )
}