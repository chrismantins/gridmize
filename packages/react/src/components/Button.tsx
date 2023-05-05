import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 100,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  transition: 'all 0.25s',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue500',
        '&:not(:disabled):hover': {
          background: '$blue700',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$blue100',
        },
      },
      outline: {
        color: '$blue700',
        border: '2px solid $blue700',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$blue700',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$blue100',
        },
      },

      secondary: {
        color: '$white',
        background: '$purple500',
        '&:not(:disabled):hover': {
          background: '$purple700',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$purple100',
        },
      },

      tertiary: {
        color: '$white',
        background: '$orange700',
        '&:not(:disabled):hover': {
          background: '$orange900',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$orange100',
        },
      },

      cancel: {
        color: '$gray100',
      },
    },

    size: {
      sm: {
        height: 32,
      },
      md: {
        height: 40,
      },
      lg: {
        height: 48,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = 'Button';
