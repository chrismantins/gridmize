import { ComponentProps, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
} from './styles';

export interface ModalProps extends ComponentProps<typeof Dialog.Root> {
  children?: ReactNode;
}

export const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>Edit profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here.
          </ModalDescription>
          {!!children && <div>{children}</div>}
          <ModalCloseButton>
            <X color="#A9A9B2" weight="light" size="20" />
          </ModalCloseButton>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
