import React, { useState } from "react";
import "./App.css";
import Odometer from "./components/odometer/odometer";
import sleep from "./components/sleep";


function App() {
  const [odo, setOdo] = useState(0);
  function addX(x) {
    x = parseInt(x);
    setOdo(odo + x);
  }

  function AddButton(props) {
    return <button onClick={() => addX(props.num)}>Add {props.num}</button>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
        <Odometer odometer={odo} />
        <span>
          <AddButton num="10000" />
          <AddButton num="1000" />
          <AddButton num="100" />
          <AddButton num="10" />
          <AddButton num="1" />
        </span>
      </header>
    </div>
  );
}

export default App;
