import clsx from 'clsx';
import { forwardRef } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';

import s from './Link.module.css';

type LinkColor = 'primary' | 'secondary';

interface LinkProps extends React.ComponentPropsWithoutRef<typeof ReactRouterDomLink> {
  color?: LinkColor;
}

export const Link = forwardRef<React.ComponentRef<typeof ReactRouterDomLink>, LinkProps>(
  ({ color = 'secondary', ...props }, ref) => (
    <ReactRouterDomLink
      {...props}
      ref={ref}
      className={clsx(s.link, s[color])}
    />
  ),
);
