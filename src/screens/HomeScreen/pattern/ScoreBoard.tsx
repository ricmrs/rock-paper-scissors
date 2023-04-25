import Box from "@/components/Box/Box";
import Image from "@/components/Image/Image";
import Text from "@/components/Text/Text";
import { useTheme } from "@/theme/ThemeProvider";

interface ScoreBoardProps {
  score: number;
}

export default function ScoreBoard({ score }: ScoreBoardProps ){
  const theme = useTheme();

  return (
    <Box 
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          outline: `3px solid ${theme.colors.text.header}`,
          alignItems: 'center',
          borderRadius: { xs: '3px', md: '6px' },
          gap: { xs: '100px', md: '300px' },
          paddingLeft: { xs: '20px', md: '30px' },
          paddingRight: { xs: '10px', md: '20px' },
          paddingVertical: { xs: '10px', md: '15px' },
        }}>
        <Box>
          <Image src="/images/logo.svg" alt="Logo" styleSheet={{ height: { xs: '50px', md: '80px' } }}/>
        </Box>
        <Box 
          styleSheet={{
            backgroundColor: '#FFF',
            borderRadius: '5px',
            alignItems: 'center',
            paddingVertical: '10px',
            paddingHorizontal: '24px'
          }}>
          <Text styleSheet={{ textTransform: 'uppercase', color: theme.colors.text.score }} variant="heading3">Score</Text>
          <Text styleSheet={{ color: theme.colors.text.dark }} variant="heading2">{score}</Text>
        </Box>
      </Box>
  )
}