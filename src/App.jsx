import AppLayout from "./components/AppLayout";
import Features from "./components/features"
import Header from "./components/header"
import Hero from "./components/hero"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";


function App() {
 
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index path="/" element={<Home/>} />   
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
