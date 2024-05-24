import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Link } from './Link';

const meta = {
  title: 'UI/Link',
  component: Link,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
  args: {
    children: 'Link',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    to: '/',
    color: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    to: '/',
    color: 'secondary',
  },
};
