import { useEffect, useState } from 'react';

import { TabsContext, TabsContextSetter } from './TabsContext';
import type { TabsState } from './TabsContext';

interface TabsProviderProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
}

export const TabsProvider: React.FC<TabsProviderProps> = ({
  onValueChange,
  defaultValue,
  value: externalValue,
  children,
}) => {
  const [internalValue, setInternalValue] = useState<TabsState>(
    defaultValue ?? externalValue ?? '',
  );

  useEffect(() => {
    onValueChange?.(internalValue);
  }, [internalValue]);

  return (
    <TabsContext.Provider value={externalValue ?? internalValue}>
      <TabsContextSetter.Provider value={setInternalValue}>{children}</TabsContextSetter.Provider>
    </TabsContext.Provider>
  );
};
