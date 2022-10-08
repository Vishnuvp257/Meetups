import React from "react";

import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
    <>
      <img src={props.image} alt={props.title} className={classes.image} />
      <h1 className={classes.center}>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </>
  );
}

export default MeetupDetails;
