import "./event.css"

export const Eventpropagation = () => {
    function handlegrandparent() {
        console.log("Grand Parent is Clicked")
    }
    function handleparent(event) {
        console.log("Parent is Clicked")

        // To stop the bubbling phase we use stop propgation
        // event.stopPropagation()
    }
    function handlechild(event) {
        
        // To stop the bubbling phase we use stop propgation
        event.stopPropagation()
        console.log("Child is Clicked")
    }
    return (
        <>
            {/* Bubbling Phase */}
            {/* <section className="main-div-center">
                <div className="g-div" onClick={handlegrandparent}>
                    <div className="p-div" onClick={handleparent}>
                        <button className="c-div" onClick={handlechild}>
                            Child Div
                        </button>
                    </div>
                </div>
            </section> */}

            {/* Capturing Phase */}
            <section className="main-div-center">
                <div className="g-div" onClickCapture={handlegrandparent}>
                    <div className="p-div" onClickCapture={handleparent}>
                        <button className="c-div" onClickCapture={handlechild}>
                            Child Div
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}