import { useMemo, useState } from "react";
import {Counts}  from "./MemoCount"
// import Counts  from "./MemoCount"
export const Reactmemo = () => {
    const [count, Setcount] = useState(0)
     const myBioData = useMemo(() => {
    return {
      name: "Hrithik",
      age: 30,
    };
  }, []);
    return (
        <>
            <div className="p-4 flex flex-col items-center h-lvh justify-center">
                <h5>{count}</h5>
                <button onClick={()=> Setcount((prev)=> prev + 1)}>Click</button>
                <Counts biodata={myBioData}/>
            </div>
        </>
    )
}