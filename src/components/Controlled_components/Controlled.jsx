import { useState } from "react"
import "./control.css"

export const Controlledform=()=>{

    // Controlled Components
    const [name, setname] = useState("")

    const handlechange =(event)=>{
        setname(event.target.value)
    }


    const handlesubmit=(event)=>{
       event.preventDefault()
    
    // UNcontrolled Components
    //    const value = document.querySelector("#input-value").value
    //    console.log(value)
    console.log(name)
    }
    return(

        // UNcontrolled Components
        // <>
        // <section className="text_center">
        // <h1 className="uncontrol_heading">Uncontrolled components</h1>
        //  <form onSubmit={handlesubmit}>
        //  <label>Name:</label>
        //  <input id="input-value" type="text" className="input_value"/>
        //  <br />
        //  <button type="submit">Submit</button>
        //     </form>
        // </section>
        // </>

        // Controlled Components
            <>
        <section className="text_center">
        <h1 className="uncontrol_heading">Uncontrolled components</h1>
         <form onSubmit={handlesubmit}>
         <label>Name:</label>
         <input id="input-value" type="text" className="input_value" value={name} onChange={handlechange}/>
         <br />
         <button type="submit">Submit</button>
            </form>
        </section>
        </>
    )
}