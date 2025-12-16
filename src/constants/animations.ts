import type {
    HeroAnimationConfig,
    BgAnimationParams,
    ButtonAnimationParams,
    ArrowAnimationParams,
    ParallaxConfig,
    TitleInitialParams,
    TitleStaggerParams,
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
  export const TITLE_INITIAL_STATE: TitleInitialParams = {
    yPercent: -100, 
    autoAlpha: 0, 
    scale: 1.2, 
  };
  
  export const TITLE_STAGGER_ANIMATION: TitleStaggerParams = {
    yPercent: 0,
    autoAlpha: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out", 
    stagger: 0.02, 
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