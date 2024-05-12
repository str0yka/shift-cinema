import clsx from 'clsx';
import React from 'react';

import s from './Typography.module.css';

type TypographyComponents = 'h1' | 'h2' | 'h3' | 'p' | 'span';
type TypographyVariants = {
  title: 'h1' | 'h2' | 'h3';
  button: 'medium' | 'semibold';
  paragraph16: 'regular' | 'medium' | 'underline';
  paragraph14: 'regular' | 'medium' | 'underline';
  paragraph12: 'regular' | 'medium' | 'underline';
};

interface TypographyProps<
  Component extends TypographyComponents,
  Variant extends keyof TypographyVariants,
> {
  component?: Component;
  variant?: `${Variant}.${TypographyVariants[Variant]}`;
}

const DEFAULT_COMPONENT: TypographyComponents = 'span';
const DEFAULT_VARIANT: `${keyof TypographyVariants}.${TypographyVariants[keyof TypographyVariants]}` =
  'paragraph16.regular';

export const Typography = <
  Variant extends keyof TypographyVariants,
  Component extends TypographyComponents,
>({
  component,
  variant,
  className,
  ...props
}: TypographyProps<Component, Variant> & React.ComponentProps<Component>) => {
  const [type, style] = (variant ?? DEFAULT_VARIANT).split('.') as [
    Variant,
    TypographyVariants[Variant],
  ];

  return React.createElement(component ?? DEFAULT_COMPONENT, {
    className: clsx(s[type], s[style], className),
    ...props,
  });
};
