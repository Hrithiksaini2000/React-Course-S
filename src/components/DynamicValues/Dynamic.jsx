// Use dynamic values using varaibles and function calls

// Arrow function use 
// export const Dynamic = ()=>{
//     let name= "Hello Hrithik Saini"
//     let designation="I am a Frontend developer"
//     let summary="Hi, I'm Hrithik Saini. I transform concepts into seamless user experiences with modern web design and frontend development skills."
//     return(
//         <>
//         <h1>{name}</h1>
//         <h4>{designation}</h4>
//         <p>{summary}</p>
//         </>
//     )
// }

// Normal function and default 

function Dynamic() {
    let name = "Hello Hrithik Saini"
    let designation = "I am a Frontend developer"
    function Summary(){
        let summary = "Hi, I'm Hrithik Saini. I transform concepts into seamless user experiences with modern web design and frontend development skills."
        return(
            <>
            {summary}
            </>
        )
    }
    return (
        <>
            <h1>{name}</h1>
            <h4>{designation}</h4>
            <p>{Summary()}</p>
        </>
    )
}

export default Dynamic