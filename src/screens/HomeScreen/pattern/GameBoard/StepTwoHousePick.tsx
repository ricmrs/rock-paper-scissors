import Box from "@/components/Box/Box";
import GameButton from "./GameButton";
import Text from "@/components/Text/Text";
import { useEffect, useState } from "react";

interface StepTwoHousePickProps {
  playersPicked: "paper" | "rock" | "scissors"
}

export default function StepTwoHousePick({ playersPicked }: StepTwoHousePickProps) {
  const [housesPicked, setHousesPicked] = useState<"paper" | "rock" | "scissors" | "none">("none")

  const boxStyles = {
    alignItems: 'center',
    gap: '15px'
  }

  const textStyles = {
    textTransform: 'uppercase', 
    color: '#FFF'
  }

  function housePickAnHand(){
    const hand = ["paper", "rock", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return hand[randomNumber] as "paper" | "rock" | "scissors"
  }

  useEffect(() => {
    setTimeout(() => setHousesPicked(housePickAnHand), 1000)
  }, [])

  return (
    <>
      <Box styleSheet={{...boxStyles}}>
        <GameButton variant={playersPicked} />
        <Text styleSheet={{...textStyles}}>You picked</Text>
      </Box>
      <Box styleSheet={{...boxStyles}}>
        <GameButton variant={housesPicked} />
        <Text styleSheet={{...textStyles}}>The House picked</Text>
      </Box>
    </>
  )
}