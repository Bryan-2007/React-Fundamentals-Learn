import { useState } from "react";

function Increment1() {
    const[count, setCount] = useState(0);

    return(
        <>
        <h1 style={{color:'red'}}>incrementer.jsx</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count+1)}>Click!</button>
        </>
    );
}

function Increment2() {
    const[count, setCount] = useState(0);

    function inc(value) {
        setCount(count + 1);
    }

    return(
    <>
    <h1 style={{color:'red'}}>incrementer.jsx</h1>
    <h3>Count: {count}</h3>
    <button onClick={inc}>Click!</button>
    </>
    );
}

export default Increment2;