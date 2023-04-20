import { Theme } from "@/theme/theme";

export type Variant = "scissors" | "paper" | "rock" | "lizard" | "cyan" | "background" | "none"

export function createLinearGradient(theme: Theme, colorVariant: Variant) {
  return `linear-gradient(${theme.colors[colorVariant].top}, ${theme.colors[colorVariant].bottom})`;
}

