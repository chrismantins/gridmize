import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Text } from '@mycelium/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Box Element Test</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
