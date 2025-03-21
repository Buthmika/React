import React from 'react';
import ReactDOM from 'react-dom';
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


const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(React.createElement(App));