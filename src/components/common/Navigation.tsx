import {scrambleText} from "../utils/scrambleText";

const links = ["Solutions", "Technology", "About", "Careers", "Resources", "Contact"];

export default function Navigation() {
 return (
  <nav>
   <ul className="flex gap-12.5 text-sm font-medium font-sans text-white/50 tracking-widest  ">
    {links.map((link) => (
     <li
      key={link}
      onMouseEnter={(e) => scrambleText(e.currentTarget)}
      className="cursor-pointer hover:text-white transition-colors delay-100"
     >
      {link}
     </li>
    ))}
   </ul>
  </nav>
 );
}
