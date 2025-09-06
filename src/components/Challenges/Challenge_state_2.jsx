import { useState } from "react"
import "./chall.css"

export const New_count = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const handleincrement = ()=>{
        if(step>100){
            setCount(0)
        }else{
            setCount(count + step)
        }
    }

    const handledecrement =()=>{
            setCount(count - step)
    }
    const resetvalue=()=>{
        setCount(0)
    }
    return (
        <>
            <div className="main_center">
                <h1>useState Challenge</h1>

                <div className="count-left">
                    <h2>Count: {count}</h2>
                    <div>
                        <label>Step: </label>
                        <input type="number" value={step} max="100" onChange={(e)=> setStep(Number(e.target.value))}/>
                    </div>
                </div>

                <div className="buttons_grid">
                    <button className="button_style" onClick={handleincrement} disabled={count >=100}>Increment</button>
                    <button className="button_style" onClick={handledecrement} disabled={count <= 0}>Decrement</button>
                    <button className="button_style" onClick={resetvalue}>Reset</button>
                </div>
            </div>
        </>
    )
}