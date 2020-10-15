import React, { useState } from "react";
import Button from "./Button";
import "./App.css";

// This program should render a random number between 1 and 6 when the button is clicked.
// 1. Complete the handleClick function which sets the number rendered when the dice is rolled.
// 2. Pass it as a prop called 'handleClick' to the Button component.

function Dice(props) {
  return <div>{props.roll}</div>;
}

function App() {
  const [roll, setRoll] = useState();
  return (
    <div>
      <Dice roll={roll} />
      <Button buttonText="Roll Away!!!" />
    </div>
  );

  function handleClick() {}
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

export default App;
