import * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from '../../styles';

const VIEWPORT_PADDING = 32;

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 99999999,
  outline: 'none',
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastRoot = styled(Toast.Root, {
  background: '$gray800',
  borderRadius: '$md',
  padding: '$3 $5',
  alignItems: 'center',
  fontFamily: '$default',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastCloseButton = styled(Toast.Close, {
  all: 'unset',

  position: 'absolute',
  top: '$4',
  right: '$4',

  cursor: 'pointer',
});

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$medium',
  color: '$white',
  fontSize: '$lg',
  lineHeight: '$base',
});

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',

  marginTop: '$1',
});
