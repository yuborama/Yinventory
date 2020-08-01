import React from "react";
import './Input.scss'

interface Input {
  text:string,
}

function Input(props:Input) {
  return (
    <div className="inputContainerClass">
      <p className="text">{props.text}</p>
      <input type="text" />
    </div>
  );
}

export default Input;
