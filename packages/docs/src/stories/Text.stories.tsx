import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@mycelium/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    lineHeight: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad pariatur expedita non. Officia molestias quisquam unde ipsum, accusantium deserunt fugiat placeat quae? Doloribus quidem numquam sequi autem officia facilis soluta.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'select' },
    },
    lineHeight: {
      options: ['xs', 'sm', 'md', 'lg', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
