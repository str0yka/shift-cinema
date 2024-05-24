import clsx from 'clsx';
import { forwardRef } from 'react';

import { Typography } from '../Typography/Typography';

import s from './Input.module.css';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  label?: string;
  hint?: string;
}

export const Input = forwardRef<React.ComponentRef<'input'>, InputProps>(
  ({ error, hint, label, type = 'text', className, ...props }, ref) => (
    <label className={s.container}>
      {label && (
        <Typography
          variant="paragraph14.regular"
          color="primary"
          className={s.label}
        >
          {label}
        </Typography>
      )}
      <input
        {...props}
        ref={ref}
        className={clsx(s.input, error && s.error, className)}
        type={type}
      />
      {hint && (
        <Typography
          variant="paragraph14.regular"
          color={error ? 'error' : 'tertiary'}
          className={s.hint}
        >
          {hint}
        </Typography>
      )}
    </label>
  ),
);
