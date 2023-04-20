import GameButton from "./GameButton";

interface StepOnePlayerPickProps {
  onClick: (value: React.MouseEvent) => void
}

export default function StepOnePlayerPick({ onClick }: StepOnePlayerPickProps){
  return (
    <>
      <GameButton variant="paper" onClick={onClick}/>
      <GameButton variant="scissors" onClick={onClick}/>
      <GameButton variant="rock" onClick={onClick}/>
    </>
  )
}