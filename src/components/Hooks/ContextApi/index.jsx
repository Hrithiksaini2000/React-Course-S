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