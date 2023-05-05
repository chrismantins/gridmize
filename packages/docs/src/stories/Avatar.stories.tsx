import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@mycelium/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg',
    alt: 'Luke Skywalker',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
