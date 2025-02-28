import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

type LottieAnimationProps = ComponentProps<typeof import('./lottie-animation').default>;

const DynamicLottieAnimation = dynamic<LottieAnimationProps>(
    () => import('./lottie-animation'),
    { ssr: false }
);

export default DynamicLottieAnimation;