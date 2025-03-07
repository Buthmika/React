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
const App=()=>{
      return React.createElement(
            "div",
            {},
            // "This is a React App"
            React.createElement("h1",{},"My react app")
      );
};

const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(React.createElement(App));