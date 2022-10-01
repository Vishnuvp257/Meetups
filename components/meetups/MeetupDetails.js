import React from "react";

import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
    <>
      <img src={props.image} alt={props.title} class={classes.image} />
      <h1 class={classes.center}>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </>
  );
}

export default MeetupDetails;
