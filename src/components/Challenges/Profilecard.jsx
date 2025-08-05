export const Profilecard=(Props)=>{
    const {name, age, gretting, children} = Props
    return(
        <>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{gretting}</p>
            <div>{children}</div>
        </>
    )
}