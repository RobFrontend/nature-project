import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header(){
return (
    <>
    <header className="flex justify-between items-center p-4 bg-slate-900 bg-blur-sm bg-opacity-20 z-50">
    <NavLink to='/'><h1 className="text-2xl text-slate-100 z-50">Logo</h1></NavLink>
    <nav className="flex gap-12 px-4 py-1 text-xl text-slate-50 max-sm:hidden">
        <NavLink to='/' className="hover:shadow-md transition duration-300 py-1 px-4">Home</NavLink>
        <NavLink to='about' className="hover:shadow-md transition duration-300 py-1 px-4">About</NavLink>
        <NavLink className="hover:shadow-md transition duration-300 py-1 px-4">Page3</NavLink>
    </nav>
    <MobileNav/>
    </header>
    </>

)
}