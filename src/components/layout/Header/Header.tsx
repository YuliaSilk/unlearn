import {useState} from "react";
import Logo from "../../common/Logo";
import Navigation from "../../common/Navigation";
import MobileNavigation from "../../common/MobileNavigation";

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);
 const toggleMenu = () => setIsOpen(!isOpen);

 return (
  <header className="fixed top-0 left-0 z-1000 w-full h-13 pt-10">
   <div className="mx-auto flex h-20 items-center justify-between px-6">
    <Logo />
    <div className="hidden md:block">
     <Navigation />
    </div>
    <button
     className="md:hidden relative z-20 w-8 h-8 flex flex-col justify-between items-center cursor-pointer"
     onClick={toggleMenu}
    >
     <span
      className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
       isOpen ? "rotate-45 translate-y-4" : ""
      }`}
     />
     <span
      className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
       isOpen ? "opacity-0" : "opacity-100"
      }`}
     />
     <span
      className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
       isOpen ? "-rotate-45 -translate-y-4" : ""
      }`}
     />
    </button>
   </div>
   <MobileNavigation
    isOpen={isOpen}
    toggleMenu={toggleMenu}
   />
  </header>
 );
}
