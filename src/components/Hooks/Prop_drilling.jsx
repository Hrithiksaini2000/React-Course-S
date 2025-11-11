// This is called propdrilling 

export const Propdrilling=()=>{
    const granddata = "All data is given"
    return(
        <>
            <h2>Hi I am Parent</h2>
            <Child data={granddata}/>
        </>
    )
}

export const Child=({data})=>{
return(
    <>
        <h2>Hi I am Child</h2>
        <Grandchild data={data}/>
    </>
)
}

export const Grandchild=({data})=>{
    return(
        <>
            <h2>Hi I am Grand Child</h2>
            <Greatgrandchild data={data}/>
        </>
    )
}

export const Greatgrandchild=({data})=>{
    return(
        <>
            <h2>Hi I am Great Grand Child  your {data}</h2>
        </>
    )
}