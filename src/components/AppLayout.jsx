import { Outlet } from "react-router-dom";
import Features from "./features";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import Headroom from "react-headroom";

export default function AppLayout(){
    return (
        <div className="z-0">

          <div className="overflow-hidden relative">

          <Hero/>
          </div>
         

          <Features/>
       
          <Outlet/>
          <Footer/>
        </div>
    )
}