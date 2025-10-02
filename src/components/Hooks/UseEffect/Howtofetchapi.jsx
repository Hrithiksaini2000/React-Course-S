import { use, useEffect, useState } from "react"

export const Howtofetchapi=()=>{
    const [apidata,Setapidata]=useState([])
    const fetchdata= async ()=>{
      await fetch(("https://jsonplaceholder.typicode.com/posts"))
        .then((res)=> res.json())
        .then((data)=>{
            Setapidata(data)
        })
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <>
            <div>
                <ul>
                  Data:
                  {
                    apidata.map((currtask)=>{
                        return(
                            <li key={currtask.id}>
                                {currtask.title}
                            </li>
                        )
                    })
                  }
                </ul>
            </div>
        </>
    )
}