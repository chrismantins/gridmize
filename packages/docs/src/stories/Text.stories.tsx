import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@mycelium/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad pariatur expedita non. Officia molestias quisquam unde ipsum, accusantium deserunt fugiat placeat quae? Doloribus quidem numquam sequi autem officia facilis soluta.',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
