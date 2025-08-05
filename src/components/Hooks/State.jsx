import { useState } from "react"
import "./state.css"

export const State = () => {
    const [count, setCount] = useState(0)
    // This console print is print by two times beacuse of react strict mode 
    console.log("Parent Component is rerendered")
    const set = () => {
        setCount(function (add) {
            return (
                add + 1
            )
        })
    }
    return (
        <>
            <section className="text-center">
                <h1>{count}</h1>
                <button onClick={set} className="incre-button">Increment</button>
            </section>
            <Childcomponent />
        </>
    )
}

    function Childcomponent() {
        // This console print is print by two times beacuse of react strict mode 
        console.log("Child Component is re rendered")
        return (
            <>
                <div>
                    <h1>Child Component</h1>
                </div>
            </>
        )
    }

    export const Siblingcomponent=()=>{
                // This console print is print by two times beacuse of react strict mode 
        console.log("Sibling Component is re rendered")
        return (
            <>
                <div>
                    <h1>Sibling Component</h1>
                </div>
            </>
        )
    }