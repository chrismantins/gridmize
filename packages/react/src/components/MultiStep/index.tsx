import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
  size: number;
  currentStep?: number;
  locale?: 'en' | 'pt';
}

export function MultiStep({
  size,
  currentStep = 1,
  locale = 'en',
}: MultiStepProps) {
  return (
    <MultiStepContainer>
      {locale === 'en' ? (
        <Label>
          Step {currentStep}/{size}
        </Label>
      ) : (
        <Label>
          Passo {currentStep} de {size}
        </Label>
      )}

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep';
