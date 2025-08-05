let age = Number(prompt("Enter the age"))

function Conditional() {
    let name = "Hello Hrithik Saini"
    let designation = "I am a Frontend developer"
    function Summary() {
        let summary = "Hi, I'm Hrithik Saini. I transform concepts into seamless user experiences with modern web design and frontend development skills."
        return (
            <>
                {summary}
            </>
        )
    }
    // one method to declare conditional operator 

    // if (age < 18) {
    //     return (
    //         <>
    //             <h1>{name}</h1>
    //             <h4>{designation}</h4>
    //             <p>{Summary()}</p>
    //             <button>Go To College</button>
    //         </>
    //     )
    // }

    // Third method to decalre conditional operator 
    // let position = "Go To College"
    // if(age > 18){
    //     position="You are in IT"
    // }

    // Fourth method to declare conditional operator
    const position=()=>{
        if(age>18){
            return "You are In IT"
        }else{
            return "Go To college"
        }
    }
    return (
        <>
            <h1>{name}</h1>
            <h4>{designation}</h4>
            <p>{Summary()}</p>
            {/* Second method Use Teranay Operator to declare condoitional operator */}
            {/* <button>{age > 18 ? "You are In IT" : "Go to College"}</button> */}
            {/* Third method */}
            {/* <button>{position}</button> */}
            <button>{position()}</button>
        </>
    )
}

export default Conditional