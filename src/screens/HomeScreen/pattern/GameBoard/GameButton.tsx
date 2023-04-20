import Box from "@/components/Box/Box";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
import { useTheme } from "@/theme/ThemeProvider";
import { createLinearGradient } from "@/theme/utils/linearGradient";

interface GameButtonProps {
  variant: "paper" | "rock" | "scissors" | "none"
  viewBox?: string;
  onClick?: (value: React.MouseEvent) => void;
}

export default function GameButton({ variant, viewBox, onClick }: GameButtonProps) {
  const theme = useTheme();
  const insideColor = variant === 'none' ? 'hsl(230, 40.9%, 17.3%)' : '#FFF'

  return (
    <Button
      styleSheet={{
        borderRadius: '100%',
        border: '15px solid transparent',
        backgroundImage: `linear-gradient(${insideColor}, ${insideColor}), ${createLinearGradient(theme, variant)}`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        paddingVertical: '30px',
        paddingHorizontal: '30px',
      }}
      onClick={onClick}
      name={variant}
    >
      {variant !== 'none' ?
        <Icon
          name={variant}
          viewBox={viewBox}
          styleSheet={{
            color: theme.colors.text.dark,
            width: '50px',
            height: '50px'
          }}
        />
        : <Box styleSheet={{ width: '50px', height: '50px'}}></Box>
      }

    </Button>
  )
}