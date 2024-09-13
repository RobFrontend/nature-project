import { Link } from "react-router-dom";

export default function Features(){
    return   <div className='bg-gradient-to-tr from-slate-100 to-slate-300 p-8 flex gap-12 content-center justify-center  drop-shadow-sm'>
        <Link to="https://www.linkedin.com/in/robert-grabowski-b97965239/"
              target="_blank"><img src="logo-in.png" alt="" className="max-h-20 brightness-0 opacity-60 hover:opacity-75 transition-all duration-500"/></Link>
        <Link to="https://www.instagram.com/rob_learns_frontend/"
              target="_blank"><img src="logo-ig.png" alt="" className="max-h-20 brightness-0 opacity-60 hover:opacity-75 transition-all duration-500"/></Link>
        <Link to="https://github.com/RobFrontend" target="_blank"><img src="logo-gh.png" alt="" className="max-h-20 brightness-0 opacity-60 hover:opacity-75 transition-all duration-500"/></Link>
    </div>
}