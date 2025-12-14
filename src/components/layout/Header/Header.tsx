import Logo from "../../common/Logo";
import Navigation from "../../common/Navigation";

export default function Header() {
 return (
  <header className="fixed top-0 left-0 z-50 w-full h-13 pt-10">
   <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
    <Logo />
    <Navigation />
   </div>
  </header>
 );
}
