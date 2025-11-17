import { useContext } from "react"
import { Biocontext, useBiocontext } from "."

export const Home=()=>{
    const {myvalue, myage} = useContext(Biocontext)
    return (
        <h2>Hello Context API {myvalue} my age is {myage}</h2>
    )
}

export const About=()=>{
    const {myvalue, myage} = useContext(Biocontext)
    return (
        <h2>Hello Context API {myvalue} my age is {myage}</h2>
    )
}

// Custom Hook
export const Custom=()=>{
    const {myvalue, myage} = useBiocontext()
    return(
        <h2>Hello Context API{myvalue} my age is {myage}</h2>
    )
}