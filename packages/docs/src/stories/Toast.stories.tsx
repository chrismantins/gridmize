import type { StoryObj, Meta } from '@storybook/react';
import { Toast, ToastProps, Button } from '@gridmize/react';
import { useState } from 'react';

const ToastComponent = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '8px',
        justifyContent: 'center',
        padding: '64px',
      }}
    >
      <Button size='sm' onClick={() => setIsOpen(true)}>
        Action to trigger Toast
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  );
};

export default {
  title: 'Feedback/Toast',
  component: ToastComponent,
  args: {
    title: 'You triggered the Toast',
    description: 'This is a 5 sec Toast message',
    duration: 5000,
  },
  argTypes: {
    duration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
