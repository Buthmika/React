import React from 'react';
const student=()=>{
      return React.createElement(
          "div",
          {},
          [
            React.createElement("h3",{},"Amal"),
             React.createElement("h3",{},20),
            React.createElement("h3",{},"Gampaha"),


          ]  
      );
}
const studentCard=()=>{
      return React.createElement(
           "div",
           {className:"StudentCard"},
            [React.createElement(
                  "img",
                  {src:"https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
                   alt:"image" ,
                   className:"image"   
            }),
            React.createElement(student)]

      )
}
const App=()=>{
      return React.createElement(
            "div",
            {},
            // "This is a React App"
            [React.createElement("h1",{},"My react app"),
            React.createElement(studentCard),
            React.createElement(studentCard)
            ]
      );
};

const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(React.createElement(App));