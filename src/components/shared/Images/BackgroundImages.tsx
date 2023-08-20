import * as React from 'react';
import BackgroundImageOne from '@/assets/bg-1.png'
import BackgroundImageTwo from '@/assets/bg-2.png'
import { ImageProps } from './types';

const BackgroundOneImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={BackgroundImageOne} alt="bg-1" />
    );
  }
);

BackgroundOneImage.displayName = 'BackgroundImageOne'

const BackgroundTwoImage = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ ...props }, forwardedRef) => {
      return (
          <img {...props} ref={forwardedRef} src={BackgroundImageTwo} alt="bg-2" />
      );
    }
  );

BackgroundTwoImage.displayName = 'BackgroundImageTwo'

export { BackgroundOneImage, BackgroundTwoImage }