import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

interface TabsExampleProps {
  defaultValue?: string;
  values?: string[];
}

const TabsExample: React.FC<TabsExampleProps> = ({ defaultValue, values }) => (
  <Tabs.Root defaultValue={defaultValue}>
    <Tabs.List>
      {values?.map((value) => (
        <Tabs.Trigger
          key={value}
          value={value}
        >
          {value}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {values?.map((value) => (
      <Tabs.Content
        key={value}
        value={value}
      >
        Some content of {value}
      </Tabs.Content>
    ))}
  </Tabs.Root>
);

const meta = {
  title: 'UI/Tabs',
  component: TabsExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
    },
  },
  args: {
    values: ['animals', 'cities'],
  },
} satisfies Meta<typeof TabsExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'Example',
};
