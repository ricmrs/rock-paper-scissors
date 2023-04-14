import Box from "@/components/Box/Box";
import { useTheme } from "@/theme/ThemeProvider";
import { createLinearGradient } from "@/theme/utils/linearGradient";
import ScoreBoard from "./pattern/ScoreBoard";
import GameBoard from "./pattern/GameBoard";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal";
import { useState } from "react";
import Image from "@/components/Image/Image";

export default function HomeScreen() {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
        background: createLinearGradient(theme, 'background'),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '20px',
        paddingTop: '30px',
        paddingBottom: '50px'
      }}
    >
      <ScoreBoard />
      <GameBoard />
      <Button
        onClick={() => setShowModal(true)} 
        styleSheet={{
          outline: '1px solid #FFF',
          color: '#FFF',
          textTransform: 'uppercase',
          paddingHorizontal: '40px',
          borderRadius: '6px',
          letterSpacing: '2px',
          fontSize: '15px'
        }}
      >
        Rules
      </Button>
      {showModal &&
        <Modal
          onClose={() => setShowModal(false)}
        >
          <Image src="./images/image-rules.svg" alt="Rules"/>
        </Modal>}
    </Box>
  )
}
