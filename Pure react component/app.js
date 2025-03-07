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
           {},
            React.createElement(
                  "img",
                  {src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F7423887%2Freact_react_native_icon&psig=AOvVaw2OuOAsu5BFs1zbhDJfgrsy&ust=1741397062801000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCZ3Nzn9osDFQAAAAAdAAAAABAE",
                   alt:"image" ,
                   className:"image";    
                  }
            )
      )
}
const App=()=>{
      return React.createElement(
            "div",
            {},
            // "This is a React App"
            [React.createElement("h1",{},"My react app"),
            React.createElement(student),
            React.createElement(student)
            ]
      );
};

const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(React.createElement(App));