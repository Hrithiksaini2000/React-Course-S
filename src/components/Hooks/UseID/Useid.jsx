import { useId } from "react"

export const UseID=()=>{
    // First Method for Some inputs
    // const usernameid = useId()
    // const passwordid = useId()
    // return(
    //     <>
    //         <form>
    //         <div>
    //             <label htmlFor={usernameid}>Username :</label>
    //             <input type="text" id={usernameid} name="username"/>
    //         </div>
    //         <div>
    //             <label htmlFor={passwordid}>Password :</label>
    //             <input type="text" id={passwordid} name="password"/>
    //         </div>
    //         <button>Submit</button>
    //         </form>
    //     </>
    // )

    // Second method for large quantity of input
        const id = useId()
    return(
        <>
            <form>
            <div>
                <label htmlFor={id + "usernameid"}>Username :</label>
                <input type="text" id={id + "usernameid"} name="name"/>
            </div>
            <div>
                <label htmlFor={id + "passwordid"}>Password :</label>
                <input type="text" id={id + "passwordid"} name="password"/>
            </div>
            <button>Submit</button>
            </form>
        </>
    )
}