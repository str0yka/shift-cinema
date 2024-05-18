import { Tabs } from './components/ui';

export const App = () => (
  <Tabs.Root defaultValue="2">
    <Tabs.List>
      <Tabs.Trigger value="1">1</Tabs.Trigger>
      <Tabs.Trigger value="2">2</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="1">Content 1</Tabs.Content>
    <Tabs.Content value="2">Content 2</Tabs.Content>
  </Tabs.Root>
);
