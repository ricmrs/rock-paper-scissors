import Box from "@/components/Box/Box";
import Text from "@/components/Text/Text";
import Button from "@/components/Button/Button";
import { useTheme } from "@/theme/ThemeProvider";

interface StepThreeResultProps {
  result: string;
  restartGame: () => void;
}

export default function StepThreeResult({ result, restartGame }: StepThreeResultProps) {
  const theme = useTheme();

  return (
    <>
      <Box styleSheet={{ alignItems: 'center', gap: '30px' }}>
        <Text variant="heading1" styleSheet={{ color: '#FFF', textTransform: 'uppercase' }}>{result}</Text>
        <Button 
          styleSheet={{ 
            color: theme.colors.text.dark, 
            backgroundColor: '#FFF', 
            textTransform: 'uppercase',
            paddingVertical: '12px',
            paddingHorizontal: '55px',
            borderRadius: '8px' 
          }}
          textVariant="body1"
          onClick={restartGame}
        >
          Play Again
        </Button>
      </Box>
    </>
  )
}