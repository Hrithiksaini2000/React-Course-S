export const Interview = () => {

    let students = [1,2,3]
    console.log(Boolean(students.length))
    return (
        <>
            {/* <p>{students.length && "No Students Found"}</p> */}
            {/* 1st Solution */}
            {/* <p>{students.length == 0 && "No Students Found"}</p> */}
            {/* 2nd solution */}
            {/* <p>{!students.length && "No Students Found"}</p> */}
            {/* 3rd Solution */}
            <p>{Boolean(!students.length)&&"No Students Found"}</p>
            <p>Number of Students: {students.length}</p>
        </>
    )
}