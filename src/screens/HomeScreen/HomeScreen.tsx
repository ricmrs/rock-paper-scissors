import Box from "@/components/Box/Box";
import { useTheme } from "@/theme/ThemeProvider";
import { createLinearGradient } from "@/theme/utils/linearGradient";
import ScoreBoard from "./pattern/ScoreBoard";
import GameBoard from "./pattern/GameBoard/GameBoard";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal";
import { useState } from "react";
import Image from "@/components/Image/Image";

export default function HomeScreen() {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [score, setScore]  = useState(0);

  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
        background: createLinearGradient(theme, 'background'),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: { xs: '20px', md: '40px'},
        paddingTop: '30px',
        paddingBottom: { xs: '50px', md: '30px' }
      }}
    >
      <ScoreBoard score={score}/>
      <GameBoard handleChangeScore={setScore}/>
      <Button
        onClick={() => setShowModal(true)} 
        styleSheet={{
          outline: '1px solid #FFF',
          color: '#FFF',
          textTransform: 'uppercase',
          paddingHorizontal: '40px',
          borderRadius: '6px',
          letterSpacing: '2px',
          fontSize: '15px',
          alignSelf: { md: 'flex-end' }
        }}
      >
        Rules
      </Button>
      {showModal &&
        <Modal
          onClose={() => setShowModal(false)}
        >
          <Image src="./images/image-rules.svg" alt="Rules" />
        </Modal>}
    </Box>
  )
}
