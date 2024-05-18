import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: 'inline-radio',
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
  },
  args: {
    children: 'Typography',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleH1: Story = {
  name: 'Title/H1',
  args: {
    variant: 'title.h1',
  },
};

export const TitleH2: Story = {
  name: 'Title/H2',
  args: {
    variant: 'title.h2',
  },
};

export const TitleH3: Story = {
  name: 'Title/H3',
  args: {
    variant: 'title.h3',
  },
};

export const ButtonMedium: Story = {
  name: 'Button/Medium',
  args: {
    variant: 'button.medium',
  },
};

export const ButtonSemibold: Story = {
  name: 'Button/Semibold',
  args: {
    variant: 'button.semibold',
  },
};

export const Paragraph16Regular: Story = {
  name: 'Paragraph/16/Regular',
  args: {
    variant: 'paragraph16.regular',
  },
};

export const Paragraph16Medium: Story = {
  name: 'Paragraph/16/Medium',
  args: {
    variant: 'paragraph16.medium',
  },
};

export const Paragraph16Underline: Story = {
  name: 'Paragraph/16/Underline',
  args: {
    variant: 'paragraph16.underline',
  },
};

export const Paragraph14Regular: Story = {
  name: 'Paragraph/14/RegularH1',
  args: {
    variant: 'paragraph14.regular',
  },
};

export const Paragraph14Medium: Story = {
  name: 'Paragraph/14/Medium',
  args: {
    variant: 'paragraph14.medium',
  },
};

export const Paragraph14Underline: Story = {
  name: 'Paragraph/14/Underline',
  args: {
    variant: 'paragraph14.underline',
  },
};

export const Paragraph12Regular: Story = {
  name: 'Paragraph/12/Regular',
  args: {
    variant: 'paragraph12.regular',
  },
};

export const Paragraph12Medium: Story = {
  name: 'Paragraph/12/Medium',
  args: {
    variant: 'paragraph12.medium',
  },
};

export const Paragraph12Underline: Story = {
  name: 'Paragraph/12/Underline',
  args: {
    variant: 'paragraph12.underline',
  },
};
