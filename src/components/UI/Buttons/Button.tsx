import type {ReactNode, MouseEvent} from "react";
import ButtonSVG from "./ButtonSVG";

interface ButtonProps {
 children: ReactNode;
 onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
 type?: "button" | "submit" | "reset";
 className?: string;
}

export default function Button({children, onClick, type = "button", className = ""}: ButtonProps) {
 return (
  <button
   type={type}
   onClick={onClick}
   className={`relative z-11 px-12 py-6 text-lg  font-bold transition-all duration-300 hover:scale-105 ${className}`}
   style={{fontFamily: "var(--font-display)"}}
  >
   <ButtonSVG />
   <span
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center z-20 bg-clip-text text-transparent "
    style={{
     backgroundImage:
      "linear-gradient(90.92deg, #EFEBFD 0%, #DBEDFF 12.13%, #CEF3ED 18.75%, #E1EBFE 25.57%, #FEFEFE 44.17%, #E8E7FD 70.83%, #C9E8FB 82.81%, #C4EFD1 100%)",
    }}
   >
    {children}
   </span>
  </button>
 );
}
