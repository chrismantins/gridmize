import type { StoryObj, Meta } from '@storybook/react';
import { Modal, ModalProps, Button } from '@gridmize/react';
import { useState } from 'react';
import { CentralizedContent } from '../components/CentralizedContent';

const ModalComponent = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CentralizedContent>
      <Button size='sm' onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal open={isOpen} onOpenChange={setIsOpen} {...props} />
    </CentralizedContent>
  );
};

export default {
  title: 'Overlay/Modal',
  component: ModalComponent,
  args: {
    title: 'You triggered the Modal',
  },
  argTypes: {},
} as Meta<ModalProps>;

export const Primary: StoryObj<ModalProps> = {};
