import type { Meta, StoryObj } from '@storybook/react';
import { Box, MultiStep, MultiStepProps } from '@mycelium/react';

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const WithLocale: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
    locale: 'pt',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Locale is used to defile de language to show in steps by default will be `en` - English, but you can add the prop `locale` for more languages. <br /> Current options: <br />`en`: English <br />`pt`: Português',
      },
    },
  },
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
