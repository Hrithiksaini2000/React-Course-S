import { useEffect, useState } from "react"
import "../UseEffect/useffect.css"
export const Reactuseffect=()=>{
    const [count, Setcount] = useState(0)
    useEffect(()=>{
        console.log("Count Value:",count)
    },[count])

    const handlecount=()=>{
        Setcount(count+1)
    }
    return(
        <>
            <section>
                <div className="use_center">
                    <h1 className="use_center">Hello Useeffect</h1>
                    <h5>Count: {count}</h5>
                    <button onClick={handlecount}>Increment</button>
                </div>
            </section>
        </>
    )
}