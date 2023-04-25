import React from 'react';
import NextLink from 'next/link';
import Text from "../Text/Text";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeColorVariants, ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";


interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: ThemeColorVariants;
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({
  href,
  children,
  colorVariant,
  styleSheet,
  colorVariantEnabled,
  ...props
}:LinkProps, ref) => {
  const theme = useTheme();
  const isIExternalLink = href.startsWith('http');

  const currentColorSet = {
    color: theme.colors[colorVariant!],
    hover: {
      color: theme.colors[colorVariant!],
    },
    focus: {
      color: theme.colors[colorVariant!],
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
    },
    ...props
  }

  if(isIExternalLink) return (
    <Text 
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

Link.defaultProps = {
  colorVariant: 'text',
  colorVariantEnabled: true,
};

Link.displayName = 'Link'

export default Link;
