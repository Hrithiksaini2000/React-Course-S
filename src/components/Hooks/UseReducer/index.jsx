import { useReducer } from "react"

export const Reducercmp=()=>{

    const initialState= {
        count:0,
        inc:2,
        dec:2
    }

    const reducer=(state, action)=>{
    console.log(state,action)

    // if(action.type=="Increment"){
    //     return state + 1;
    // }else if(action.type=="Decrement"){
    //     return state - 1;
    // }else if(action.type=="Reset"){
    //     return state=0
    // }
    
    // Best approach for use reducer 
    switch (action.type) {
        case "Increment":
            return {
                // In all conditions we use ...state (...) spred opeartor so out other values will be not change we use this as a precaution for the large projects
                ...state,
                count: state.count + 1
            }
        case "Decrement":
            return {
                ...state,
                count: state.count - 1
            }
        case "Reset":
            return {
                ...state,
                count: 0
            }
        default:
            return {state}
    }

}
    // const [count, dispatch] = useReducer(reducer,0)
    // Best approach for use reducer 
    const [state, dispatch] = useReducer(reducer,initialState)
    // console.log(useReducer(reducer,0))
    return(
        <>
            <div className="p-4 h-lvh flex flex-col items-center justify-center">
                <h1>{state.count}</h1>
                <button onClick={()=> dispatch({type: "Increment"})}>Increment</button>
                <button onClick={()=> dispatch({type: "Decrement"})}>Decrement</button>
                <button onClick={()=> dispatch({type: "Reset"})}>Reset</button>
            </div>
        </>
    )
}