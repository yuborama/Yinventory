import React from "react";

interface Input {
  text:string,
}

export const Input = (props:Input) => {
  return (
    <div className="inputContainerClass">
    <p className="text">{props.text}</p>
    <input type="text" />
  </div>
  )
}
