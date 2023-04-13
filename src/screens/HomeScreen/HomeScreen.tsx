import Box from "@/components/Box/Box";
import { useTheme } from "@/theme/ThemeProvider";
import { createLinearGradient } from "@/theme/utils/linearGradient";
import ScoreBoard from "./pattern/ScoreBoard";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
        background: createLinearGradient(theme, 'background'),
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <ScoreBoard />
    </Box>
  )
}
