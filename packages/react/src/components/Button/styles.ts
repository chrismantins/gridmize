import { styled } from '../../styles';

export const ButtonContainer = styled('button', {
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
        background: '$$primaryColor',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$$contrastColor',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $$lightColor',
        },
      },
      outline: {
        color: '$$contrastColor',
        border: '2px solid $$contrastColor',
        background: 'transparent',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$$primaryColor',
          borderColor: '$$primaryColor',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $$lightColor',
        },
      },

      cancel: {
        color: '$gray600',
        border: '2px solid $gray500',
        background: '$gray100',
        '&:not(:disabled):hover': {
          background: '$gray400',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$gray500',
        },
      },
    },

    size: {
      sm: {
        height: 32,
        fontSize: '$sm',
        padding: '0 $2',
      },
      md: {
        height: 40,
        fontSize: '$sm',
      },
      lg: {
        height: 48,
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
