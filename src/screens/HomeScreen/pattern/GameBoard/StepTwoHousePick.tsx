import Box from "@/components/Box/Box";
import GameButton from "./GameButton";
import Text from "@/components/Text/Text";
import { useEffect, useState } from "react";
import StepThreeResult from "./StepThreeResult";
import { Pick } from "./GameBoard";

interface StepTwoHousePickProps {
  playersPicked: Pick
}

export default function StepTwoHousePick({ playersPicked }: StepTwoHousePickProps) {
  const [housesPicked, setHousesPicked] = useState<Pick | "none">("none");
  const [gameFinished, setGameFinished] = useState(false);

  const boxStyles = {
    alignItems: 'center',
    gap: '15px'
  }

  const textStyles = {
    textTransform: 'uppercase',
    color: '#FFF'
  }

  function housePickAnHand() {
    const hand = ["paper", "rock", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return hand[randomNumber] as Pick
  }

  useEffect(() => {
    setTimeout(() => setHousesPicked(housePickAnHand), 1000)
    setTimeout(() => setGameFinished(true), 5000)
  }, [])

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
          <StepThreeResult result="You win" />
        }
      </Box>

    </>
  )
}