import ButtonSVG from "./ButtonSVG";
import type {ButtonProps} from "../../../types/button";
import {useRef} from "react";
import {gsap} from "gsap";

export default function Button({children, onClick, type = "button", className = "", ...props}: ButtonProps) {
 const textRef = useRef<HTMLSpanElement>(null);

 const handleMouseEnter = () => {
  if (textRef.current) {
   gsap.to(textRef.current, {
    backgroundPosition: "200% center",
    duration: 1,
    ease: "power2.inOut",
   });
  }
 };

 const handleMouseLeave = () => {
  if (textRef.current) {
   gsap.to(textRef.current, {
    backgroundPosition: "left center",
    duration: 1,
    ease: "power2.inOut",
   });
  }
 };

 return (
  <button
   {...props}
   type={type}
   onClick={onClick}
   onPointerEnter={handleMouseEnter}
   onPointerLeave={handleMouseLeave}
   className={`relative z-11 px-12 py-6 text-lg  font-bold transition-all duration-300 hover:scale-105  ${className}`}
   style={{fontFamily: "var(--font-display)"}}
  >
   <div className=" inset-0 z-10 ">
    <ButtonSVG />
   </div>
   <span
    ref={textRef}
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center z-20 bg-clip-text text-transparent  transition-all duration-300 "
    style={{
     backgroundImage: "var(--bg-aurora)",
     backgroundSize: "200% auto",
     backgroundPosition: "left center",
    }}
   >
    {children}
   </span>
  </button>
 );
}
