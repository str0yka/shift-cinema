import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'radio',
      options: ['contained', 'text'],
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
  name: 'Primary/Contained',
  args: {
    variant: 'contained',
    color: 'primary',
  },
};

export const PrimaryText: Story = {
  name: 'Primary/Text',
  args: {
    variant: 'text',
    color: 'primary',
  },
};

export const SecondaryContained: Story = {
  name: 'Secondary/Contained',
  args: {
    variant: 'contained',
    color: 'secondary',
  },
};

export const SecondaryText: Story = {
  name: 'Secondary/Text',
  args: {
    variant: 'text',
    color: 'secondary',
  },
};
