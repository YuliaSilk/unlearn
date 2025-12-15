import {useEffect, useRef} from "react";
import gsap from "gsap";

import BgDataSVG from "./UI/BgDataSvg";

import BgLinesSvg from "./UI/BgLinesSvg";
import Button from "./UI/Buttons/Button";
import ArrowDownBtn from "./UI/Buttons/ArrowDownBtn";

export default function Hero() {
 const heroRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
   const tl = gsap.timeline({
    defaults: {ease: "power4.out"},
   });

   tl
    .from("[data-bg] svg", {
     scale: 1.8,
     y: 60,
     autoAlpha: 0,
     duration: 1.8,
     ease: "power3.out",
     transformOrigin: "50% 50%",
    })

    .from(
     "[data-hero-title]",
     {
      y: 120,
      autoAlpha: 0,
      duration: 1.8,
     },
     "-=1.1"
    )

    .from(
     "[data-hero-btn]",
     {
      scale: 0.9,
      autoAlpha: 0,
      duration: 0.8,
     },
     "-=0.6"
    )

    .from(
     "[data-hero-arrow]",
     {
      y: -20,
      autoAlpha: 0,
      duration: 0.6,
     },
     "-=0.4"
    );
  }, heroRef);

  return () => ctx.revert();
 }, []);

 useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
   const x = (e.clientX / window.innerWidth - 1) * 60;
   const y = (e.clientY / window.innerHeight - 1) * 60;

   gsap.to("[data-data]", {
    x,
    y,
    duration: 4,
    ease: "power2.out",
   });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
 }, []);

 return (
  <section
   ref={heroRef}
   className="relative flex min-h-screen items-center justify-center pt-20"
  >
   <div
    data-bg
    className="pointer-events-none absolute inset-0 z-0"
   >
    <div
     className="absolute inset-32"
     data-data
    >
     <BgDataSVG />
    </div>
    <div
     className="absolute inset-32"
     data-lines
    >
     <BgLinesSvg />
    </div>
   </div>
   <div className="relative z-10 flex flex-col gap-2 place-self-end items-center justify-center mb-11">
    <div className="text-center">
     <Button
      data-hero-btn
      className="relative"
     >
      START TODAY!
     </Button>
    </div>
    <div className="w-[800px] flex overflow-hidden ">
     <h1
      data-hero-title
      className="text-4xl md:text-6xl xl:text-[84px] font-medium text-center tracking-tight  leading-[105%]"
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
