function Mouse_actions() {
    function mouse_enter(){
        console.log("Mouse entered element");
    }

    function mouse_leave() {
        console.log("Mouse exited element");        
    }

    return(
        <>
        <h1 style={{color:'red'}} onMouseEnter={mouse_enter} onMouseLeave={mouse_leave}>
            mouse_actions.jsx
        </h1>
        <p>Check console</p>
        </> 
    );
}

export default Mouse_actions;