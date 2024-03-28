import "./App.css";
import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("destroyed");
  // }

  // function hiFn() {
  //   console.log("created");
  //   return byeFn; //component가 destroy될 때 뭔가 실행하는 cleanup function
  // }
  // useEffect(hiFn, []);
  useEffect(() => {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>{" "}
      {/*showing하면 Hide를 보여주고, showing하지 않으면 Show보여줌*/}
    </div>
  );
}

export default App;
