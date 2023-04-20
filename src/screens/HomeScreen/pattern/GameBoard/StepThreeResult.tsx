import Box from "@/components/Box/Box";
import GameButton from "./GameButton";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";

interface StepThreeResultProps {
  playersPicked: "paper" | "rock" | "scissors";
  housesPicked: "paper" | "rock" | "scissors";
}

export default function StepThreeResult({ playersPicked, housesPicked }: StepThreeResultProps) {
  const boxStyles = {
    alignItems: 'center',
    gap: '15px'
  }

  const textStyles = {
    textTransform: 'uppercase', 
    color: '#FFF'
  }

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
      <Box>
        <Text>You lose</Text>
        <Button>Play Again</Button>
      </Box>
    </>
  )
}