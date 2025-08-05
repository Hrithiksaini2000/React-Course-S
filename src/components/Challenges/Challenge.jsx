import { Profilecard } from "./Profilecard"
export const Challenge = () =>{
    return(
        <Profilecard name="Hrithik" age={30} gretting={
            <div>
                <h2>Hi I am Hrithik Saini</h2>
            </div>
        }>
            <div>
                <p>Hobbies: travelling and movie</p>
                <button>Contact</button>
            </div>
        </Profilecard>
    )
}