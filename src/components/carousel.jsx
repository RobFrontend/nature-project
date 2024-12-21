import React, { useEffect, useState } from "react";

export default function Carousel({ imgArr }) {
  const [isHover, setIsHover] = useState(false);
  const imagesArr = imgArr;
  let [current, setCurrent] = useState(imagesArr.at(0));
  const [opa, setOpa] = useState(1);
  let [numArr, setNumArr] = useState(0);
  let [move, setMove] = useState("translateX(0px)");

  useEffect(
    function () {
      if (isHover) return;
      const interval = setInterval(() => {
        setOpa(0);
        setMove("translateX(-300px)");

        setTimeout(() => {
          setNumArr((num) => {
            const curNum = (num + 1) % imagesArr.length;
            setCurrent(imagesArr.at(curNum));
            return curNum;
          });
          setMove("translateX(300px)");
          setTimeout(() => {
            setMove("translateX(0px)");
            setOpa(1);
          }, 150);
        }, 150);
      }, 3000);
      return () => clearInterval(interval);
    },
    [current, opa, numArr, imagesArr, move]
  );
  function handeClick(inn) {
    if (inn !== numArr) {
      setOpa(0);
      if (inn > numArr) {
        setMove("translateX(-300px)");
      }
      if (inn < numArr) {
        setMove("translateX(300px)");
      }
      setTimeout(() => {
        if (inn > numArr) {
          setMove("translateX(300px)");
        }
        if (inn < numArr) {
          setMove("translateX(-300px)");
        }
        setTimeout(() => {
          setMove("translateX(0px)");
          setNumArr(inn);
          setCurrent(imagesArr.at(inn));
          setOpa(1);
        }, 150);
      }, 150);
    }
  }
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-slate-100 to-slate-300 py-6">
      <div
        className={`flex pt-12 text-slate-600 drop-shadow-lg transition-all duration-500`}
      >
        <div className="w-screen grid">
          <div
            onMouseEnter={() => setIsHover((isHover) => (isHover = true))}
            onMouseLeave={() => setIsHover((isHover) => (isHover = false))}
            className="grid justify-self-center gap-8 px-4 transition-all duration-150"
            style={{ opacity: `${opa}`, transform: `${move}` }}
          >
            <h2 className="text-4xl text-center uppercase font-bold max-md:text-2xl max-[550px]:text-xl">
              Mountain Nightscape
            </h2>
            <img
              className="justify-self-center max-h-[400px] w-auto hover:scale-105 transition-all duration-500"
              src={current}
              alt="xD"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-center p-8">
        {imagesArr.map((image, i) => (
          <button
            onClick={() => {
              handeClick(i);
              console.log(image, i);
            }}
            className={`${
              numArr === i ? `bg-slate-400` : `bg-slate-100 hover:bg-slate-50`
            } rounded-full p-3 transition-all duration-300 hover:scale-[1.05]`}
            key={image}
          ></button>
        ))}
      </div>
    </div>
  );
}

// export default function Carousel() {
//   const [isOne, setIsOne] = useState(0);
//   const [isHover, setIsHover] = useState(false);
//   const button1BG =
//     isOne === 0 ? `bg-slate-400` : `bg-slate-100 hover:bg-slate-50`;
//   const button2BG =
//     isOne === -25 ? `bg-slate-400` : `bg-slate-100 hover:bg-slate-50`;
//   const button3BG =
//     isOne === -50 ? `bg-slate-400` : `bg-slate-100 hover:bg-slate-50`;
//   const button4BG =
//     isOne === -75 ? `bg-slate-400` : `bg-slate-100 hover:bg-slate-50`;

//   useEffect(() => {
//     if (!isHover) {
//       const interval = setInterval(() => {
//         if (isOne !== -75) setIsOne((i) => i - 25);
//         if (isOne === -75) setIsOne((i) => (i = 0));
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isOne, setIsOne, isHover, setIsHover]);

//   return (
//     <>
//       <div className="overflow-x-hidden bg-gradient-to-br from-slate-100 to-slate-300 py-6">
//         <div
//           className={`flex pt-12 text-slate-600 drop-shadow-lg w-[400%] transition-all duration-500`}
//           style={{ transform: `translateX(${isOne}%)` }}
//         >
//           <div
//             className="w-screen grid"
//             onMouseEnter={() => setIsHover((isHover) => (isHover = true))}
//             onMouseLeave={() => setIsHover((isHover) => (isHover = false))}
//           >
//             <div className="grid justify-self-center gap-8 px-4">
//               <h2 className="text-4xl text-center uppercase font-bold max-md:text-2xl max-[550px]:text-xl">
//                 Mountain Nightscape
//               </h2>
//               <img
//                 className="justify-self-center max-h-[400px] w-auto hover:scale-105 transition-all duration-500"
//                 src="Car1.webp"
//                 alt="xD"
//               />
//             </div>
//           </div>
//           <div
//             className="w-screen grid "
//             onMouseEnter={() => setIsHover((isHover) => (isHover = true))}
//             onMouseLeave={() => setIsHover((isHover) => (isHover = false))}
//           >
//             <div className="grid justify-self-center gap-8 px-4">
//               <h2 className="text-4xl text-center uppercase font-bold max-md:text-2xl max-[550px]:text-xl">
//                 Icy Sea Horizons
//               </h2>
//               <img
//                 className="justify-self-center max-h-[400px] w-auto hover:scale-105 transition-all duration-500"
//                 src="Car3.webp"
//                 alt="xD"
//               />
//             </div>
//           </div>
//           <div
//             className="w-screen grid "
//             onMouseEnter={() => setIsHover((isHover) => (isHover = true))}
//             onMouseLeave={() => setIsHover((isHover) => (isHover = false))}
//           >
//             <div className="grid justify-self-center gap-8 px-4">
//               <h2 className="text-4xl text-center uppercase font-bold max-md:text-2xl max-[550px]:text-xl">
//                 River Valley Pass
//               </h2>
//               <img
//                 className="justify-self-center max-h-[400px] w-auto hover:scale-105 transition-all duration-500"
//                 src="Car4.webp"
//                 alt="xD"
//               />
//             </div>
//           </div>
//           <div
//             className="w-screen grid "
//             onMouseEnter={() => setIsHover((isHover) => (isHover = true))}
//             onMouseLeave={() => setIsHover((isHover) => (isHover = false))}
//           >
//             <div className="grid justify-self-center gap-8 px-4">
//               <h2 className="text-4xl text-center uppercase font-bold max-md:text-2xl max-[550px]:text-xl">
//                 Rocky Woodland Peaks
//               </h2>
//               <img
//                 className="justify-self-center max-h-[400px] w-auto hover:scale-105 transition-all duration-500"
//                 src="Car2.webp"
//                 alt="xD"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-8 justify-center p-8">
//           <button
//             onClick={() => setIsOne(0)}
//             className={`${button1BG} rounded-full p-3 transition-all duration-300 hover:scale-[1.05]`}
//           ></button>
//           <button
//             onClick={() => setIsOne(-25)}
//             className={`${button2BG} rounded-full p-3 transition-all duration-300  hover:scale-[1.05]`}
//           ></button>
//           <button
//             onClick={() => setIsOne(-50)}
//             className={`${button3BG} rounded-full p-3 transition-all duration-300  hover:scale-[1.05]`}
//           ></button>
//           <button
//             onClick={() => setIsOne(-75)}
//             className={`${button4BG} rounded-full p-3 transition-all duration-300  hover:scale-[1.05]`}
//           ></button>
//         </div>
//       </div>

//     </>
//   );
// }
