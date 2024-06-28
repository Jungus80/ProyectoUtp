import { useState } from "react";
import {links, logImg} from "../assets/resources";
import { Button } from "./Button";

export const Navbar = ()=>{
    let [open,SetOpen] = useState(false)
    // shawow crea sombra
    return (
    <nav className="shadow-md w-full top-0 left-0 ">
        <div className="md:flex bg-grey-400 py-4 md:px-7  items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
                <span className="text-3xl text-indigo-600 mr-1 pt-2">
                <img src={logImg} alt="" className=" w-16 h-16" />
                </span>
                CINE UTP  
            </div>
            <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=>SetOpen(!open)}>
            <ion-icon name={open?'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
            left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open?'top-20 opacity-100':'top-[-490px]'}`}>
                {
                    links.map((links)=>(
                    <li key={links.name} className="ml-8 text-xl md:my-0 my-7"> 
                    {/* FIRST REMOVE MARGIN THEN ADD 7  */}
                     <a href={links.link} className="text-gray-800 hover:text-gray-400">{links.name}</a>
                   </li>  
                    ))
                }
                <Button>
                    Revisar Boletos 
                </Button>
            </ul>
           
        </div>
    </nav>
    )
}