import AppLayout from "./components/AppLayout";
import Features from "./components/features"
import Header from "./components/header"
import Hero from "./components/hero"
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Booking from "./pages/booking";


function App() {
 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Navigate replace to='/home' />} />
          <Route path="/home" element={<Home/>} />   
          <Route path="about" element={<About/>}/>
          <Route path="booking" element={<Booking/>} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
