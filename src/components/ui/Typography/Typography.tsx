import clsx from 'clsx';
import React from 'react';

import s from './Typography.module.css';

type TypographyComponents = 'h1' | 'h2' | 'h3' | 'p' | 'span';
type TypographyVariants =
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

interface TypographyProps<Component extends TypographyComponents> {
  component?: Component;
  variant?: TypographyVariants;
}

const DEFAULT_COMPONENT: TypographyComponents = 'span';
const DEFAULT_VARIANT: TypographyVariants = 'paragraph16.regular';

export const Typography = <Component extends TypographyComponents>({
  component,
  variant,
  className,
  ...props
}: TypographyProps<Component> & React.ComponentProps<Component>) => {
  const [type, style] = (variant ?? DEFAULT_VARIANT).split('.');

  return React.createElement(component ?? DEFAULT_COMPONENT, {
    className: clsx(s[type as keyof typeof s], s[style as keyof typeof s], className),
    ...props,
  });
};
