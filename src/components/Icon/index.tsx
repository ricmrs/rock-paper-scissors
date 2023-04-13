import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import * as icons from './svgs/_index';

const iconSizes = {
  xs: '40px',
  md: '48px',
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  viewBox?: number;
}
export default function Icon({ name, styleSheet, viewBox, ...props }: IconProps) {
  const CurrentIcon = icons[name];
  return (
    // <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <BaseComponent
      as="svg"
      styleSheet={{
        width: { xs: iconSizes.xs, md: iconSizes.md },
        height: { xs: iconSizes.xs, md: iconSizes.md },
        ...styleSheet,
      }}
      color="inherit"
      fill="currentColor"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  viewBox: 48
}
