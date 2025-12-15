import type { MousePosition, ParallaxConfig } from "../types/hero";
import { DEFAULT_PARALLAX_CONFIG } from "../constants/animations";

export function calculateParallaxOffset(
  clientX: number,
  clientY: number,
  config: ParallaxConfig = DEFAULT_PARALLAX_CONFIG
): MousePosition {
  const multiplier = config.multiplier || 60;
  
  return {
    x: (clientX / window.innerWidth - 1) * multiplier,
    y: (clientY / window.innerHeight - 1) * multiplier,
  };
}