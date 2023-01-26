import { useState } from "react";
import './timer.css'
const HOC=(Enter)=>{
    const Timer = () => {
        let [val,updateVal]=useState(0);
        let inc=()=>{
            updateVal(val+1)
        }
      return (
            <>
                <Enter val={val} inc={inc}/>
            </>
        )
    }
    return Timer
}


export default HOC