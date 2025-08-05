export const Eventhandle = () => {

    function handlemultiplef(event) {
        console.log(event)
        console.log(event.target)
        console.log(event.type)
        alert("I am Clicked")
    }

    const handlename=(users)=>{
        console.log(`Hey ${users} Welcome`)
    }
    return (
 
        <>

            {/* Using Function Componets With Named Conventions */}
            <button onClick={handlemultiplef}>Click Me</button>

            {/* Using Fat Arrow Functions */}
            <button onClick={() => handlemultiplef(event)}>Click Me 2</button>

            {/* Passing argument to event handlers */}
            <button onClick={()=> handlename("Hrithik Saini")}>Click Me 3</button>

        </>
    )
}