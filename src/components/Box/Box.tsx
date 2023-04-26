import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import React from 'react';

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

const Box = React.forwardRef(({ styleSheet, children, tag, ...props }: BoxProps, ref) => {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props} ref={ref}>
      {children}
    </BaseComponent>
  );
})

Box.displayName = 'Box';

export default Box;
