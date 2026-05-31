function Passing(props) {
    return(
        <>
        <h1 style={{color:'red'}}>pass_parameters.jsx</h1>
        <p>I am {props.name} and I am {props.age}</p>
        </>
    );
}

// If we pass values for name and age into the function those will be displayed
// the values should be passed in app.jsx when calling the function

export default Passing;