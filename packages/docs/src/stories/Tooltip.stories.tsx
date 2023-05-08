import type { StoryObj, Meta } from '@storybook/react';
import { Tooltip, TooltipProps, Button, Box, Text } from '@gridmize/react';

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover Tooltip</Button>,
    content: 'This is my Tooltip on hover',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '$2',
            justifyContent: 'center',
            padding: '$16',
          }}
        >
          <Text size='sm'>Basic Tooltip</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
