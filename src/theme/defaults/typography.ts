export const typography = {
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  variants: {
    heading1: {
      fontWeight: {
        xs: '600',
      },
      fontSize: {
        xs: '50px',
      },
      lineHeight: '1'
    },
    heading2: {
      fontWeight: {
        xs: '600',
      },
      fontSize: {
        xs: '36px',
      },
      lineHeight: '1'
    },
    heading3: {
      fontWeight: {
        xs: '700',
      },
      fontSize: {
        xs: '10px',
      },
      letterSpacing: '1.25px',
    },
    body1: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '16px',
      },
      letterSpacing: 1
    },
    body2: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '15px',
      },
    },
  }
} as const;
