import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Demo.css";
//  ********* class based *********
// class Demo extends Component
// {
//     render()
//     {
//         return(
//         <div className="maindiv_style">
//             <h1>name: {this.props.name} </h1>
//         <h1>contact: {this.props.contact} </h1>
//         </div>
//         )
//     }
// }
//        ****** function based ********* 
const Demo = (props) => {
  return (
    <div className="maindiv_style">
      <h1>name: {props.name} </h1>
      <h1>contact: {props.contact} </h1>
    </div>
  );
};

// const Demo = ({contact,name}) => {
//   return (
//     <div className="maindiv_style">
//             <h1>name: {name} </h1>
//       <h1>contact: {contact} </h1>
//     </div>
//   );
// };


export default Demo;
