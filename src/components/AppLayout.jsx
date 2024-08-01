import { Outlet } from "react-router-dom";
import Features from "./features";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import Headroom from "react-headroom";

export default function AppLayout(){
    return (
        <>
          <Headroom>
            <Header/>
          </Headroom>
          <Hero/>
          <Features/>
          <Outlet/>
          <Footer/>
        </>
    )
}