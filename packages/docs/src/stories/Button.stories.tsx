import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@gridmize/react';
import { Plus } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click Me!',
    variant: 'primary',
    size: 'md',
    disabled: false,
    color: 'blue',
  },
  argTypes: {
    variant: {
      options: ['primary', 'outline', 'cancel'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      options: [
        'blue',
        'red',
        'green',
        'yellow',
        'orange',
        'pink',
        'purple',
        'turquoise',
        'sapphire',
      ],
      control: {
        type: 'select',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Add More
        <Plus weight='bold' />
      </>
    ),
  },
};

export const Cancel: StoryObj<ButtonProps> = {
  args: {
    variant: 'cancel',
    children: 'Cancel Button',
  },
};
