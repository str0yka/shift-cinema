import { useContext } from 'react';

import { TabsContext, TabsContextSetter } from './TabsContext';

export const useTabs = () => useContext(TabsContext);
export const useTabsSetter = () => useContext(TabsContextSetter);
