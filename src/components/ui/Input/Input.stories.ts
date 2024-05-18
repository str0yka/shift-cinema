import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: false,
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const WithError: Story = {
  name: 'With error',
  args: {
    error: true,
  },
};

export const WithLabel: Story = {
  name: 'With label',
  args: {
    label: 'Label',
  },
};

export const WithHint: Story = {
  name: 'With hint',
  args: {
    hint: 'Hint message goes here',
  },
};

export const WithLabelAndHint: Story = {
  name: 'With label and hint',
  args: {
    label: 'Label',
    hint: 'Hint message goes here',
  },
};

export const WithLabelAndHintAndError: Story = {
  name: 'With label, hint and error',
  args: {
    error: true,
    label: 'Label',
    hint: 'Hint message goes here',
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Label',
    hint: 'Hint message goes here',
  },
};
