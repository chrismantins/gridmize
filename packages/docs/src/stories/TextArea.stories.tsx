import type { StoryObj, Meta } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@mycelium/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text size='sm'>Details</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Ad any datails',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
