import type {
    HeroAnimationConfig,
    BgAnimationParams,
    TitleAnimationParams,
    ButtonAnimationParams,
    ArrowAnimationParams,
    ParallaxConfig,
} from "../types/hero";
  
  export const DEFAULT_ANIMATION_CONFIG: HeroAnimationConfig = {
    ease: "power4.out",
  };
  
  export const BG_ANIMATION: BgAnimationParams = {
    scale: 1.8,
    y: 60,
    autoAlpha: 0,
    duration: 1.8,
    ease: "power3.out",
    transformOrigin: "50% 50%",
    
  };
  
  export const TITLE_ANIMATION: TitleAnimationParams = {
    y: 120,
    autoAlpha: 0,
    duration: 1.8,
  };
  
  export const BUTTON_ANIMATION: ButtonAnimationParams = {
    scale: 0.9,
    autoAlpha: 0,
    duration: 0.8,
    
    
  };
  
  export const ARROW_ANIMATION: ArrowAnimationParams = {
    y: -20,
    autoAlpha: 0,
    duration: 0.6,
  };
  
  export const DEFAULT_PARALLAX_CONFIG: ParallaxConfig = {
    multiplier: 60,
    duration: 4,
    ease: "power2.out",
  };