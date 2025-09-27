import { useEffect, useState } from "react"
import "./use.css"

export const Useffectchallenge = () => {
    const [count,Setcount] = useState(0)
    const [name, Setname] = useState("")

    useEffect(()=>{
            document.title=`count: ${count}`
    },[count])
    useEffect(()=>{
        return()=>{
            console.log("Count:",count)
            console.log("Name",name)
        };

    },[count,name])

    const handlecount=()=>{
        Setcount(count + 1)
    }

    const handlechange=(event)=>{
        Setname(event.target.value)
    }
    return (
        <>
            <div className="main_center">
                <h1 className="use_heading">USEFFECT CHALLENGE</h1>
                <div className="count_heading">
                    Count: {count}
                </div>
                <div>
                    <button className="incre_btn" onClick={handlecount}>Increment</button>
                </div>
                <div className="name_heading">
                    Name: {name}
                </div>
                      <div>
                    <input type="text" name="name" value={name} placeholder="Enter Your Name" onChange={handlechange}/>
                    </div>
            </div>
        </>
    )
}