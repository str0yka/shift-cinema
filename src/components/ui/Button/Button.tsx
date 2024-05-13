import clsx from 'clsx';
import { forwardRef } from 'react';

import s from './Button.module.css';

type ButtonColors = 'primary' | 'secondary';
type ButtonVariants = 'contained' | 'text';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants;
  color?: ButtonColors;
}

export const Button = forwardRef<React.ElementRef<'button'>, ButtonProps>(
  ({ variant = 'contained', color = 'primary', className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={clsx(s.button, s[color], s[variant], className)}
    />
  ),
);
