import { ComponentProps, ElementType } from 'react';
import { ButtonContainer } from './styles';

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType;
}

export const Button = ({ children, color, ...props }: ButtonProps) => {
  const primaryColorByProps = color ? `$colors-${color}500` : '$blue500';
  const contrastColorByProps = color ? `$colors-${color}700` : '$blue700';
  const lightColorByProps = color ? `$colors-${color}100` : '$blue100';
  return (
    <ButtonContainer
      css={{
        $$primaryColor: primaryColorByProps,
        $$contrastColor: contrastColorByProps,
        $$lightColor: lightColorByProps,
      }}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

Button.displayName = 'Button';
