import {scrambleText} from "../../utils/scrambleText";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {links} from "../../constants/links";
import type {MobileNavigationProps} from "../../types/mobileNav";

export default function MobileNavigation({isOpen, toggleMenu}: MobileNavigationProps) {
 const listRef = useRef<HTMLUListElement>(null);

 useEffect(() => {
  if (listRef.current) {
   if (isOpen) {
    gsap.fromTo(
     listRef.current.children,
     {y: 30, autoAlpha: 0},
     {y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.5, ease: "power2.out"}
    );
   }
  }
 }, [isOpen]);

 return (
  <div
   className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md z-10 transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
   }`}
  >
   <ul
    ref={listRef}
    className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-medium text-white"
   >
    {links.map((link) => (
     <li
      key={link}
      onClick={toggleMenu}
      onMouseEnter={(e) => scrambleText(e.currentTarget)}
      onTouchStart={(e) => scrambleText(e.currentTarget)}
      className="cursor-pointer hover:text-purple-300 transition-colors duration-200"
     >
      {link}
     </li>
    ))}
   </ul>
  </div>
 );
}
