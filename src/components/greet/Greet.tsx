// import React from 'react'

import GreetProps from "./greet.types";

// const Greet = () => {
//   return (
//     <div>Hello</div>
//   )
// }

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};

export default Greet;
