import { IconButton, IconButtonProps } from '@mui/material';
import UseAnimation from 'react-useanimations';
import heart from 'react-useanimations/lib/heart';

export interface HeartButtonProps extends IconButtonProps {
  filled?: boolean;
}

export const HeartButton = ({ onClick, size, filled, ...rest }: HeartButtonProps) => (
  <UseAnimation
    animation={heart}
    fillColor='currentColor'
    size={size === 'large' ? 32 : 28}
    strokeColor='currentColor'
    reverse={filled}
    onClick={(e) => onClick && onClick(e as any)}
    render={(eventProps, animationProps) => (
      <IconButton size={size} {...rest} {...eventProps}>
        <div {...animationProps} />
      </IconButton>
    )}
  />
);
