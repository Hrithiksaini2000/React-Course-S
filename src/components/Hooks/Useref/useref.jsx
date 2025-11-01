import { useRef } from "react"

export const Useref=()=>{
    // Use ref hook 
    const username = useRef(null)
    const password = useRef(null)
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username.current.value,password.current.value)
    }
    return(
        <>
        <form onClick={handlesubmit}>
            <input type="text" id="username" ref={username}/>
            <br/>
            <input type="text" id="password" ref={password}/>
            <br/>
            <button>Submit</button>
        </form>
        </>
    )
}