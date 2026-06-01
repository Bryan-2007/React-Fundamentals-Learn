import { useState } from "react";

function Button_click(){
    const[text, setText] = useState("");

    function insert() {
            setText("This is some new inserted content");
    }

    return(
        <>
        <h1 style={{color:'red'}}>button_click.jsx</h1>
        <h3 id='toInsert'>{text}</h3>
        <button onClick={insert}>SHOW</button>
        </>
    );
}

export default Button_click;