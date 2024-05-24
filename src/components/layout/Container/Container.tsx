import clsx from 'clsx';
import { forwardRef } from 'react';

import s from './Container.module.css';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Container = forwardRef<React.ComponentRef<'div'>, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={clsx(s.container, className)}
    />
  ),
);
