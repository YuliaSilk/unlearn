export interface LogoGradientConfig {
    radius: number;
    colors: {
      start: string;
      middle: string;
      end: string;
    };
    stops: {
      start: string;
      middle: string;
      end: string;
    };
  }
  
  export interface LogoAnimationConfig {
    followSpeed: number;
    fadeInDuration: number;
    fadeOutDuration: number;
  }