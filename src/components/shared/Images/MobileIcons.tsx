import * as React from 'react';
import Apple from '@/assets/apple.png'
import Android from '@/assets/android.png'
import { ImageProps } from './types';

const AppleImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={Apple} alt="bg-1" />
    );
  }
);

AppleImage.displayName = 'AppleImage'

const AndroidImage = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ ...props }, forwardedRef) => {
      return (
          <img {...props} ref={forwardedRef} src={Android} alt="bg-2" />
      );
    }
  );

AndroidImage.displayName = 'AndroidImage'

export { AppleImage, AndroidImage }