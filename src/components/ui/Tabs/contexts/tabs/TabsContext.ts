import { createContext } from 'react';

export type TabsState = string;
export type TabsStateSetter = React.Dispatch<React.SetStateAction<TabsState>>;

export const TabsContext = createContext<TabsState>('');
export const TabsContextSetter = createContext<TabsStateSetter>(() => {});
