import clsx from 'clsx';
import React from 'react';

import s from './Typography.module.css';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'p' | 'span';
type TypographyVariant =
  | 'title.h1'
  | 'title.h2'
  | 'title.h3'
  | 'button.medium'
  | 'button.semibold'
  | 'paragraph16.regular'
  | 'paragraph16.medium'
  | 'paragraph16.underline'
  | 'paragraph14.regular'
  | 'paragraph14.medium'
  | 'paragraph14.underline'
  | 'paragraph12.regular'
  | 'paragraph12.medium'
  | 'paragraph12.underline';
type TypographyColor =
  | 'invert'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quartenery'
  | 'error'
  | 'brand'
  | 'brand-disabled';

interface TypographyProps<Component extends TypographyComponent> {
  component?: Component;
  variant?: TypographyVariant;
  color?: TypographyColor;
}

const DEFAULT_COMPONENT: TypographyComponent = 'span';
const DEFAULT_VARIANT: TypographyVariant = 'paragraph16.regular';
const DEFAULT_COLOR: TypographyColor = 'primary';

export const Typography = <Component extends TypographyComponent>({
  component,
  variant = DEFAULT_VARIANT,
  color = DEFAULT_COLOR,
  className,
  ...props
}: TypographyProps<Component> & React.ComponentPropsWithoutRef<Component>) => {
  const [type, style] = variant.split('.') as (keyof typeof s)[];

  return React.createElement(component ?? DEFAULT_COMPONENT, {
    className: clsx(s[type], s[style], s[color], className),
    ...props,
  });
};
