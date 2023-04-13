import Box from "@/components/Box/Box";
import Text from "@/components/Text/Text";
import { useTheme } from "@/theme/ThemeProvider";

export default function ScoreBoard(){
  const theme = useTheme()

  const textStyles = {
    textTransform: 'uppercase',
    color: '#FFF',
  }

  return (
    <Box 
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: '100px',
          outline: `3px solid ${theme.colors.text.header}`,
          borderRadius: '3px',
          paddingLeft: '20px',
          paddingRight: '10px',
          paddingVertical: '10px',
          alignItems: 'center'
        }}>
        <Box>
          <Text styleSheet={{...textStyles}} variant="heading2">Rock</Text>
          <Text styleSheet={{...textStyles}} variant="heading2">Paper</Text>
          <Text styleSheet={{...textStyles}} variant="heading2">Scissors</Text>
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
          <Text styleSheet={{ color: theme.colors.text.dark }} variant="heading1">12</Text>
        </Box>
      </Box>
  )
}