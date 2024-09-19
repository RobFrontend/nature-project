import { Outlet } from "react-router-dom";
import Features from "./features";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import Headroom from "react-headroom";
import { Children } from "react";

export default function AppLayout(){
    return (
        <div className="z-0">       
          <Outlet/>
          <Footer/>
        </div>
    )
}