import { useState } from "react"
import "../Short_circuit_evaution/Short.css"

export const Short_circuit = () =>{
    const [isloggedin, setloggedin] = useState(true)
    const [user, setuser] = useState("")
    return(
        <section className="short_container">
        <h1 className="heading">Welcome to the ShortCircuit Evaluation!</h1>
        {isloggedin && <p>You are Logged In!</p>}
        {user ? `${user}` : "You are Logged Out"}
        <div className="short_flex">
            <button onClick={()=> setloggedin(!isloggedin)}>Toggle Login State</button>
            <button onClick={()=> setuser("Hello Hrithik Saini")}>Set User</button>
            <button onClick={()=> setuser("")}>Clear User</button>
        </div>
        </section>
    )
}