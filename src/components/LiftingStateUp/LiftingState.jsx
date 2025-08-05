import { useState } from "react"
// Lifiting Up state in react from child component to parent component so that every one can use 


export const LiftingState=()=>{
    const [inputvalue, setinputvalue ] =useState('')
    return(
        <>
            <Inputcomponent inputtext={inputvalue} updatetext={setinputvalue}/>
            <Displaycomponent displaytext={inputvalue}/>
        </>
    )
}

export const Inputcomponent=(Props)=>{
    // const [inputvalue, setinputvalue ] =useState('')
    const {inputtext, updatetext} = Props

    return(
        <>
            <input value={inputtext} onChange={(e)=> updatetext(e.target.value)}></input>
        </>
    )
}

export const Displaycomponent=(Props)=>{
    const {displaytext} = Props
    return(
        <>
            <h5>The Change of input: {displaytext}</h5>
        </>
    )
}