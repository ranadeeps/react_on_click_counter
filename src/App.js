import React from "react";
import Board from "./components/Board";
import "./styles/root.scss" ;
import Hello from "./components/Hello";
const App = () => {
  return(
      <div className="app">
        <h1>On Click Counter</h1>
        <Board/>
      </div>
    );
  };
export default App;
