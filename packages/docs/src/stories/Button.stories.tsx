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
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'outline', 'cancel'],
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

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
};

export const Cancel: StoryObj<ButtonProps> = {
  args: {
    variant: 'cancel',
    children: 'Cancel Button',
  },
};
