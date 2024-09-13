import { useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "./header";

export default function Hero() {
  const [isOpacity, setIsOpacity] = useState(90);
  const [isBig, setIsBig] = useState(8);
  const [isOne, setIsOne] = useState(0);
  //   const [isTwo, setIsTwo] = useState(25);
  //   const [isThree, setIsThree] = useState(50);
  //   const [isFour, setIsFour] = useState(75);

  // function caro(){
  //     if(isOne < 75){
  //         setIsOne(0)
  //     }
  //     if(isOne === 75) {
  //         setIsOne(-100)
  //     }
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpacity((prev) => (prev === 90 ? 50 : 90));
      setIsBig((prev) => (prev === 8 ? 6 : 8));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const textSizeClass = isBig === 8 ? "text-7xl max-sm:text-4xl" : "text-6xl max-sm:text-3xl";
  const opacityClass = isOpacity === 90 ? "opacity-90" : "opacity-50";

  

  return (
    <>
              
      <div className="overflow-hidden min-h-screen bg-cover bg-top" style={{background: `url("Hero.webp")`, backgroundSize: 'cover', backgroundPosition: 'top'}}>
      <Headroom>
            <Header/>
          </Headroom>
        <div className="p-8 grid justify-items-center pt-24 h-[40vh] ">
          <h1 className="text-4xl font-bold text-slate-50 drop-shadow-md tracking-tight uppercase opacity-50 max-sm:text-2xl">
            Project
          </h1>

          <h1
            className={`${textSizeClass} ${opacityClass} font-bold text-slate-50 drop-shadow-md tracking-tight uppercase transition-all duration-1000 `}
          >
            Nature
          </h1>
        </div>
      </div>
      
    </>
  );
}
