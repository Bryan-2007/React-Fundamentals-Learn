# REPO OVERVIEW

A hands-on repository for learning React fundamentals step by step, covering components, JSX, props, state management, events, forms, lists, effects, asynchronous operations, and basic Context API through practical examples.


# Scope of the Repo
- Components
- JSX
- Props
- useState
- Event Handling
- Forms
- Lists
- useEffect
- Async / Await
- Context API


# What is React?

React is a JavaScript library for building user interfaces, especially web applications(Webapp).

It allows developers to create applications by combining small, reusable pieces called components. React automatically updates the webpage when application data changes, making it easier to build interactive and dynamic user interfaces.


# Workflow of a REACT APP

1. The webapp once deployed or run, searches for the file index.html for content

2. main.jsx insertes data into an element in index.html

3. app.jsx sends the collection of all data of components and modules of the webapp to main.jsx

4. The individual modules or components(.jsx files) send their data to app.jsx

data --> .jsx files --> app.jsx --> main.jsx --> index.html --> display


# Tech Stack

* HTML
* CSS
* JS
* React
* node.js
* JSON

# REACT Basics

1. Components
- Reusable UI module in webapp
- Literally a JS function
- Must return a single entity

Eg:

```
function Welcome(){
    return(
        <h1> Hello, Welcome! </h1>
    );
}

export default Welcome;
```

2. JSX
- Stands for Javascript XML
- Allows us to write HTML code directly inside JS
- All JS & HTML features can be included in a single file

Eg:

```
function Welcome(){
    return(
        <>
        <p> My name is Tom </p>
        <p> I am {5 + 21} yrs old </p>
        </>
    );
}

export default Welcome;
```

3. Props
- Stands for properties
- Simply, they are just parameters passed into a JS function
- Parameters of a React component

Eg:

```
function Welcome(name, age){
    return(
        <>
        <p> My name is {name} </p>
        <p> I am {age} yrs old </p>
        </>
    );
}

export default Welcome;
```

4. useState
- Allows components to store dynamic data
- An element inside a component can be incremented or set any value from outside
- Core usecase:
```
    const [stateVariable, setStateVariable] = useState(initialValue);
```

Eg:
```
import { useState } from 'react';

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
export default Incrementer1;
```
```
import { useState } from 'react';

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
export default Incrementer2;
```

5. Event Handling
- Decides what action needs to be done when an event occurs
- Events like mouse click, hover, button click, giving input
- Major events:
    - onClick
```
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
```
    - onChange
```
```
    - onSubmit
```
```
    - onMouseEnter
```
```
    - onMouseLeave
```
```


6. Forms

7. Lists

8. useEffect

9. Async / Await

10. Context API


# PROJECT SETUP for React Vite

Step 1

* Execute ```npm create vite@latest <project-name> -- --template react``` in cmd in project location
* The default project structure will be created automatically with all required files

Step 2

* Delete files app.css & index.css and also remove the line from main.jsx
* Replace app.jsx with your content and components

Step 3

* Run ```npm install```

This would install all the required dependencies and packages for the project in the project directory

Step 4

* Create separate files for components and modules of webapp
* Modify app.jsx to suit your own content
* Import components, modules and content into this file to display
* Modify index.html and add a element 'root' to which you would import content from main.jsx

Step 5

* Run ```npm run dev```
* Use provided link to open live server in browser & view result
