const App=()=>{
      return React.createElement(
            "div0",
            {},
            // "This is a React App"
            React.createElement("h1",{},"My react app")
      );
};

const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(React.createElement(App));