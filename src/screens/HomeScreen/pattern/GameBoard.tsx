import Box from "@/components/Box/Box";
import Button from "@/components/Button/Button"
import Icon from "@/components/Icon"
import * as icons from '@/components/Icon/svgs/_index';
import { useTheme } from "@/theme/ThemeProvider";
import { Variant, createLinearGradient } from "@/theme/utils/linearGradient";

export default function GameBoard() {
  return (
    <Box
      styleSheet={{
        backgroundImage: 'url(./images/bg-triangle.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '80%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '55px',
        rowGap: '35px',
        justifyContent: 'center'
      }}>
      <GameButton name="paper" variant="paper" />
      <GameButton name="scissors" variant="scissors" />
      <GameButton name="rock" viewBox="0 -5 58 58" variant="rock" />
    </Box>
  )
}

interface GameButtonProps {
  name: keyof typeof icons;
  variant: Variant;
  viewBox?: string
}

function GameButton({ name, viewBox, variant }: GameButtonProps) {
  const theme = useTheme();

  return (
    <Button styleSheet={{
      borderRadius: '100%',
      border: '15px solid transparent',
      backgroundImage: `linear-gradient(white, white), ${createLinearGradient(theme, variant)}`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      paddingVertical: '30px',
      paddingHorizontal: '30px',
    }}>
      <Icon
        name={name}
        viewBox={viewBox}
        styleSheet={{
          color: theme.colors.text.dark,
          width: '50px',
          height: '50px'
        }}
      />
    </Button>
  )
}