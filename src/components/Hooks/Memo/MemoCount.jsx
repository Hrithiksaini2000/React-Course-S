import { useRef, memo } from "react";


// export const Counts=()=>{
//     const renders = useRef(0)
//     console.log(renders)

//     return(
//         <>
//         <div>
//             <h5>Nothing Can change or Click Only rerenders:<span>{renders.current++}</span></h5>
//         </div>
//         </>
//     )
// }

// we use memo to prvent rerendering of the child from parent 

// const Counts=()=>{
//     const renders = useRef(0)
//     console.log(renders)

//     return(
//         <>
//         <div>
//             <h5>Nothing Can change or Click Only rerenders:<span>{renders.current++}</span></h5>
//         </div>
//         </>
//     )
// }

// export default memo(Counts)

// Second method of use the memo

export const Counts = memo(({ biodata })=>{
    const renders = useRef(0)
    console.log(renders)

    return(
        <>
        <div>
            <h5>Nothing Can change or Click Only rerenders:<span>{renders.current++}</span></h5>
            <p>My Name is {biodata.name}</p>
        </div>
        </>
    )
})