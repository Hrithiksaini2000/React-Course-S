import { useContext } from "react"
import { Biocontext } from "."

export const Home=()=>{
    const {myvalue, myage} = useContext(Biocontext)
    return (
        <h2>Hello Context API {myvalue} my age is {myage}</h2>
    )
}