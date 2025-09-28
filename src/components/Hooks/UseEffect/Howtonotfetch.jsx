import { useState } from "react"

export const Howtonotfetchapi = () => {
    const [apidata, Setapidata] = useState([])
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            // Setapidata(data)
        }
    )
        .catch((error) => console.error(error))
    return (
        <>
            <div>
                <ul>
                    Data:
                    {apidata.map((currtask) => {
                        return (
                            <li key={currtask.id}>
                                {currtask.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}