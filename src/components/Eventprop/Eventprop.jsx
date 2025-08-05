export const Eventprop = () => {
    const handleclick = (user) => {
        alert(`Hey ${user}`)
    }

    const handlehover=()=>{
        alert("Hey I am Hrithik saini")
    }
    
    return (
        <>
        {/* Passing events as a props */}
        {/* In Parent function you can change any event name into for e.g onclick to button click */}
            <Welcomeuser onClick={() => handleclick("Hrithik Saini")} onMouseEnter={()=>handlehover()} />
        </>
    )
}

const Welcomeuser = (props) => {
    // And if you change change the event name in parent function you can also change here on carley braces and also return 
    const{onClick, onMouseEnter}=props
    const handleonclick=()=>{
        alert("Props is working")
        // props.onClick()
    }
    return (
        <>
        {/* Passing events as a props */}
            {/* <button onClick={props.onClick}>Click Me</button>
            <button onMouseEnter={props.onMouseEnter}>Click Me 2</button> */}
               <button onClick={onClick}>Click Me</button>
            <button onMouseEnter={onMouseEnter}>Click Me 2</button>
            <button onClick={handleonclick}>Click Me 3</button>
        </>
    )
}
