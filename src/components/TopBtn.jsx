import { useState,useEffect } from "react";
import { up } from "../assets/index";
import { fadeIn } from "../utils/motion";
function TopBtn() {
    const [btn,setbtn] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 
            ? setbtn(true)
            : setbtn(false)
           
        })
    });
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return(
        <button
        style={{
            
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                KhtmlUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                outline: 'none !important'
            
        }}
        className= {`${ btn?'fixed': 'hidden'}  rounded-full bg-[#1f0a4e] bottom-[20px] right-[10px] m-11 h-11 cursor-pointer`}
        onClick={scrollUp}
        >

            <img src={up} alt="up" className=" rounded-full w-9 h-9 "/>
        </button>
    );
}
export default TopBtn;