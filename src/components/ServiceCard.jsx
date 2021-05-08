import React from "react";
import {NavLink} from 'react-router-dom'

const ServiceCard = (props) => {
  return (
    <>
      <div class="card" style={{width: 18+"rem"}}>
        <img class="card-img-top" src={props.imgsrc} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
          {props.text}
          </p>
          <NavLink to="/contact" class="btn-email-me btn-contact">
            Contact Me
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
