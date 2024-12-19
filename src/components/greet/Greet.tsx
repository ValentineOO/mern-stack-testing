// import React from 'react'

// const Greet = () => {
//   return (
//     <div>Hello</div>
//   )
// }

type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return <div>Hello</div>;
};

export default Greet;
