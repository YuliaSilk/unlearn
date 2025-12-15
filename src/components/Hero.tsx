import {useEffect} from "react";
import gsap from "gsap";

import BgDataSVG from "./UI/BgDataSvg";

import BgLinesSvg from "./UI/BgLinesSvg";
import Button from "./UI/Buttons/Button";
import ArrowDownBtn from "./UI/Buttons/ArrowDownBtn";

export default function Hero() {
 useEffect(() => {
  gsap.from("[data-hero-title]", {
   //    y: 120,
   duration: 2,
   ease: "power4.out",
  });

  //   gsap.from("[data-lines]", {
  //    y: 50,

  //    duration: 1.5,
  //    ease: "power2.out",
  //   });

  gsap.from("[data-data]", {
   y: 80,
   duration: 1.8,
   ease: "power3.out",
  });
 }, []);

 useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
   const x = (e.clientX / window.innerWidth - 2) * 30;
   const y = (e.clientY / window.innerHeight - 0.5) * 30;

   gsap.to("[data-data]", {
    x,
    y,
    duration: 2,
    ease: "power2.out",
   });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
 }, []);

 return (
  <section className="relative flex min-h-screen items-center justify-center pt-20">
   <div className="pointer-events-none absolute inset-0 z-0">
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
     <Button className="relative">START TODAY!</Button>
    </div>
    <div className="w-[800px] flex overflow-hidden ">
     <h1
      data-hero-title
      className="text-[84px] font-medium text-center tracking-tight  leading-[105%]"
     >
      Building the future of medicine with AI
     </h1>
    </div>
    <div className="flex self-center mt-9">
     <ArrowDownBtn />
    </div>
   </div>
  </section>
 );
}
