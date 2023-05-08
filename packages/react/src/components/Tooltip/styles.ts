import * as Tooltip from '@radix-ui/react-tooltip';

import { styled } from '../../styles';

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  borderRadius: '$sm',
  fontFamily: '$default',
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$medium',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
  fill: '$gray900',
});
