import { useState, useEffect,useRef } from "react";

  
const Test = () => {
    const [name, setName]=useState("John")
    const renderCount=useRef(0)
    const inputRef=useRef()
    useEffect(()=>{
        renderCount.current=renderCount.current+1
    })
    const focus=()=>{
        inputRef.current.focus()
    }
    return (
       <div>
        <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
        <div>My Name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
        <button onClick={focus}>Focus</button>
       </div>
    )
};
export default Test;