import * as React from 'react';
import FeatureImageOne from '@/assets/feature-image.png'
import { ImageProps } from './types';

const FeatureOneImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={FeatureImageOne} alt="bg-1" />
    );
  }
);

FeatureOneImage.displayName = 'FeatureOneImage'

export {  FeatureOneImage }