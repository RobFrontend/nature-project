import { useEffect, useState } from "react"

export default function Hero(){
const [isOpacity, setIsOpacity] = useState(90);
const [isBig, setIsBig] = useState(8)
const [isOne, setIsOne] = useState(0)
const [isTwo, setIsTwo] = useState(25)
const [isThree, setIsThree] = useState(50)
const [isFour, setIsFour] = useState(75)

// function caro(){
//     if(isOne < 75){
//         setIsOne(0)
//     }
//     if(isOne === 75) {
//         setIsOne(-100)
//     }
// }

useEffect(()=> {

        setInterval(() => {
            if(isOpacity === 90 && isBig === 8) {
                setIsOpacity(50)
                setIsBig(6)
            }
            if(isOpacity === 50 && isBig === 6) {
                setIsOpacity(90)
                setIsBig(8)
            }
        }, 3000);
    
},[isOpacity, setIsOpacity, isBig, setIsBig])

    return (
        
        <>
    <div className="overflow-hidden min-h-screen bg-cover bg-top bg-[url('https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="p-8 grid justify-items-center pt-24 h-[40vh]">
        <h1 className="text-4xl font-bold text-slate-50 drop-shadow-md tracking-tight uppercase opacity-50">Project</h1>
       
        <h1 className={`text-${isBig}xl font-bold text-slate-50 drop-shadow-md tracking-tight uppercase transition-all duration-1000 opacity-${isOpacity}`}>Nature</h1>
        </div>

        
    </div>
    <div className={`flex pt-12 text-slate-100 drop-shadow-lg w-[400%] translate-x-[${isOne}%] transition-all duration-500`}>
            <div className="w-screen grid">
                <div className="justify-self-center">

                <h2 className="text-[96px] text-center uppercase">Pierwszy</h2>
                <img className="max-h-[300px] w-min" src="https://images.unsplash.com/photo-1516470047996-b6dde636095f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="xD"/>
                </div>
            </div>
            <div className="w-screen grid">
                <div className="justify-self-center">

                <h2 className="text-[96px] text-center uppercase">Drugi</h2>
                <img className="max-h-[300px] w-min" src="https://images.unsplash.com/photo-1466872732082-8966b5959296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="xD"/>
                </div>
            </div>
            <div className="w-screen grid">
                <div className="justify-self-center">

                <h2 className="text-[96px] text-center uppercase">Trzeci</h2>
                <img className="max-h-[300px] w-min" src="https://images.unsplash.com/photo-1477573829233-74cd1c17fa65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="xD"/>
                </div>
            </div>
            <div className="w-screen grid">
                <div className="justify-self-center">

                <h2 className="text-[96px] text-center uppercase">Czwarty</h2>
                <img className="max-h-[300px] w-min" src="https://images.unsplash.com/photo-1489782419474-4d4221dc5b10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="xD"/>
                </div>
            </div>
        </div>
        <div className="flex gap-8 justify-center p-8">
        <button onClick={()=> setIsOne(0)} className={`p-4 bg-slate-${isOne === 0 ? '400' : '100' } rounded-full`}>1</button>
        <button onClick={()=> setIsOne(-25)} className={`p-4 bg-slate-${isOne === -25 ? '400' : '100' } rounded-full`}>2</button>
        <button onClick={()=> setIsOne(-50)} className={`p-4 bg-slate-${isOne === -50 ? '400' : '100' } rounded-full`}>3</button>
        <button onClick={()=> setIsOne(-75)} className={`p-4 bg-slate-${isOne === -75 ? '400' : '100' } rounded-full`}>4</button>
        </div>
        </>
    )
}