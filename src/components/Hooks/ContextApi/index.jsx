import { use } from "react";
import { createContext, useContext } from "react";

export const Biocontext = createContext()

export const Bioprovider=({children})=>{
    const myvalue = "My Name is Hrithik"
    const myage = "25 years old"
    return(
        <Biocontext.Provider value={{myvalue,myage}}>
            {children}
        </Biocontext.Provider>
    )
}

// Custom Hooks
export const useBiocontext=()=>{
    const context = useContext(Biocontext)
    return context
}

// New use hook introduce in react 19 
export const useBiocontext2=()=>{
    const context = use(Biocontext)
    return context
}