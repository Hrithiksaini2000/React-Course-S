import { useState } from "react"
import "../Challenges/chall.css"

const Users=[{name:"Hrithik", age: 24},
    {name:"Simran", age: 23},
    {name:"Mandeep", age: 28},
    {name:"Tushar", age: 22}
]

export const Maploop=()=>{
    return(
        <>
            <div className="main-div">
                <h1>All The Users</h1>
                <ul className="flex">
                   {
                    Users.map((user,index)=>{
                        return(
                            <>
                                <li key={index}>
                                    <h1>UserName: {user.name}</h1>
                                    <h5>Age: {user.age}</h5>
                                </li>
                            </>
                        )
                    })
                   }
                </ul>
            </div>
        </>
    )
}

export const Derivedstate=()=>{
    const [data, updatedata] = useState(Users)
    const usercount = data.length
    return(
        <>
                        <div className="main-div">
                <h1>All The Users</h1>
                <ul className="flex">
                {data.map((user,index)=>{
                    return(
                        <>
                            <li key={index}>
                            <h1>{user.name}</h1>
                            <h5>{user.age}</h5>
                            </li>
                        </>
                    )
                })}
                <p>{usercount}</p>
                </ul>
            </div>
        </>
    )
}