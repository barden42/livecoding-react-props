import "./CardUser.css";
import React from "react";

function CardUser(props) {
  return (
    <div>
      <img src={props.imgUrl} alt="Avatar" />
      <p className="names">
        {props.firstName} - {props.lastName}
      </p>
      <p className="contact">
        {props.phone} - {props.email}
      </p>
    </div>
  );
}

export default CardUser;

//rsf = react stateless function
