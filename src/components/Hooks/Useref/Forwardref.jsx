import { useRef } from "react"
import { forwardRef, useId } from "react"

export const Forwardref=()=>{
    const username = useRef(null)
    const password = useRef(null)

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username.current.value,password.current.value)
    }
    return(
        <form onSubmit={handlesubmit}>
        <Beforeforward19 label="username" ref={username} /> 
        <Beforeforward19 label="password" ref={password} /> 
        <button>Submit</button>
        </form>
    )
}

// Before React 19 we need to use forward ref 
// const Beforeforward19=forwardRef((props,ref)=>{
//     const id = useId()
// return(
//     <div>
//         <label htmlFor={id}>{props.label}</label>
//         <input type="text" ref={ref}/>
//     </div>
// )
// })

// After Version 19 
const Beforeforward19=({label,ref})=>{
    const id = useId()
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    )
}
