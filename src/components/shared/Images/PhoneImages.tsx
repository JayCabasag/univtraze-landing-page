import * as React from 'react';
import PhoneFrontOne from '@/assets/phone-front.png'
import PhoneFrontTwo from '@/assets/phone-front-1.png'
import PhoneFrontThree from '@/assets/phone-front-2.png'
import PhoneFrontFour from '@/assets/phone-front-3.png'
import { ImageProps } from './types';

const PhoneFrontOneImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={PhoneFrontOne} alt="bg-1" />
    );
  }
);

PhoneFrontOneImage.displayName = 'PhoneFrontOneImage'

const PhoneFontTwoImage = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ ...props }, forwardedRef) => {
      return (
          <img {...props} ref={forwardedRef} src={PhoneFrontTwo} alt="bg-2" />
      );
    }
  );

PhoneFontTwoImage.displayName = 'PhoneFontTwoImage'

const PhoneFontThreeImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={PhoneFrontThree} alt="bg-3" />
    );
  }
);

PhoneFontThreeImage.displayName = 'PhoneFontThreeImage'

const PhoneFontFourImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={PhoneFrontFour} alt="bg-4" />
    );
  }
);

PhoneFontFourImage.displayName = 'PhoneFontFourImage'

export { PhoneFrontOneImage, PhoneFontTwoImage, PhoneFontThreeImage , PhoneFontFourImage}