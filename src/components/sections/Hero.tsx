import {useEffect, useRef} from "react";
import gsap from "gsap";

import BgDataSVG from "../UI/HeroBG/BgDataSvg";

import BgLinesSvg from "../UI/HeroBG/BgLinesSvg";
import Button from "../UI/Buttons/Button";
import ArrowDownBtn from "../UI/Buttons/ArrowDownBtn";
import type {HeroProps} from "../../types/hero";
import {
 DEFAULT_ANIMATION_CONFIG,
 BG_ANIMATION,
 TITLE_ANIMATION,
 BUTTON_ANIMATION,
 ARROW_ANIMATION,
 DEFAULT_PARALLAX_CONFIG,
} from "../../constants/animations";
import {calculateParallaxOffset} from "../../utils/parallax";

export default function Hero({
 animationConfig = DEFAULT_ANIMATION_CONFIG,
 parallaxConfig = DEFAULT_PARALLAX_CONFIG,
}: HeroProps) {
 const heroRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
   const tl = gsap.timeline({
    defaults: {ease: animationConfig.ease},
   });

   tl
    .from("[data-bg] svg", BG_ANIMATION)
    .from("[data-hero-title]", TITLE_ANIMATION, "-=1.1")
    .from("[data-hero-btn]", BUTTON_ANIMATION, "-=0.6")
    .from("[data-hero-arrow]", ARROW_ANIMATION, "-=0.4");
  }, heroRef);

  return () => ctx.revert();
 }, [animationConfig]);

 useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
   const {x, y} = calculateParallaxOffset(e.clientX, e.clientY, parallaxConfig);

   gsap.to("[data-data]", {
    x,
    y,
    duration: parallaxConfig.duration,
    ease: parallaxConfig.ease,
   });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
 }, [parallaxConfig]);

 return (
  <section
   ref={heroRef}
   className="relative flex min-h-screen items-center justify-center px-4 md:px-6 lg:px-8  pt-20"
  >
   <div
    data-bg
    className="pointer-events-none absolute inset-0 z-0"
   >
    <div
     className="absolute inset-0 top-32 "
     data-data
    >
     <BgDataSVG />
    </div>
    <div
     className="absolute inset-0  top-32"
     data-lines
    >
     <BgLinesSvg />
    </div>
   </div>
   <div className="relative z-10 max-w-[80%] md:max-w-4xl lg:max-w-6xl flex flex-col gap-2 place-self-end items-center justify-center mb-11">
    <div className="text-center">
     <Button
      data-hero-btn
      className="relative"
     >
      START TODAY!
     </Button>
    </div>
    <div className=" w-full lg:w-[800px] flex overflow-hidden ">
     <h1
      data-hero-title
      className="text-3xl md:text-6xl xl:text-[84px] font-medium text-center tracking-tight  leading-snug md:leading-tight"
     >
      Building the future of medicine with AI
     </h1>
    </div>
    <div
     data-hero-arrow
     className="flex self-center mt-9"
    >
     <ArrowDownBtn />
    </div>
   </div>
  </section>
 );
}
