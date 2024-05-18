import clsx from 'clsx';
import { forwardRef } from 'react';

import s from './Tabs.module.css';
import { TabsProvider, useTabs, useTabsSetter } from './contexts';

interface TabsListProps extends React.ComponentPropsWithoutRef<'div'> {}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={clsx(s.list, className)}
  />
));

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  value: string;
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, type, className, onClick, ...props }, ref) => {
    const tab = useTabs();
    const setTab = useTabsSetter();

    const isActive = tab === value;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(event);
      setTab(value);
    };

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={clsx(s.trigger, isActive && s.active, className)}
        onClick={handleClick}
      />
    );
  },
);

interface TabsContentProps {
  value: string;
  children?: React.ReactNode;
}

const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const tab = useTabs();

  const isActive = tab === value;

  return isActive ? children : null;
};

export const Tabs = {
  Root: TabsProvider,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
