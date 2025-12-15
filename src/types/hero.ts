export interface HeroAnimationConfig {
  ease?: string;
  duration?: number;
}

export interface BgAnimationParams {
  scale: number;
  y: number;
  autoAlpha: number;
  duration: number;
  ease: string;
  transformOrigin: string;
}

export interface TitleAnimationParams {
  y: number;
  autoAlpha: number;
  duration: number;
}

export interface ButtonAnimationParams {
  scale: number;
  autoAlpha: number;
  duration: number;
}

export interface ArrowAnimationParams {
  y: number;
  autoAlpha: number;
  duration: number;
}

export interface ParallaxConfig {
  multiplier?: number;
  duration?: number;
  ease?: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface HeroProps {
  title?: string;
  buttonText?: string;
  showArrow?: boolean;
  animationConfig?: HeroAnimationConfig;
  parallaxConfig?: ParallaxConfig;
}