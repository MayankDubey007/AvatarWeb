import React from "react";
import "./Avatar.css";


const Avatar = (props) => {
  return (
      // <div >
    <div className="text-center my-4  px-0 Avatarr">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt=" Avatar" />
        <h1 className="text-center"> {props.name} </h1>
        <p> {props.role}</p>
    </div>
      // </div>
  );
};
export default Avatar;
