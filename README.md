# REPO OVERVIEW

A hands-on repository for learning React fundamentals step by step, covering components, JSX, props, state management, events, forms, lists, effects, asynchronous operations, and basic Context API through practical examples.


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

