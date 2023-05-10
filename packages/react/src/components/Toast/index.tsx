import { ComponentProps, ReactNode } from 'react';
import * as ToastRadix from '@radix-ui/react-toast';
import { X } from 'phosphor-react';

import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastViewport,
} from './styles';

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description?: string | ReactNode;
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {!!description && <ToastDescription>{description}</ToastDescription>}
        <ToastCloseButton>
          <X color="#A9A9B2" weight="light" size="20" />
        </ToastCloseButton>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  );
};

Toast.displayName = 'Toast';
