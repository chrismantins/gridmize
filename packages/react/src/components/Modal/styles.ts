import * as Dialog from '@radix-ui/react-dialog';
import { keyframes, styled } from '../../styles';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const ModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$gray900',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const ModalContent = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  borderRadius: 6,
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '$6',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  fontFamily: '$default',
});

export const ModalTitle = styled(Dialog.Title, {
  fontWeight: '$medium',
  color: '$white',
  fontSize: '$lg',
  lineHeight: '$base',
});

export const ModalDescription = styled(Dialog.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',

  marginTop: '$1',
});

export const ModalCloseButton = styled(Dialog.Close, {
  all: 'unset',

  position: 'absolute',
  top: '$4',
  right: '$4',

  cursor: 'pointer',
});
