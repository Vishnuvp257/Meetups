import React from "react";

import NewMeetupForm from "./../../components/meetups/NewMeetupForm";

function NewMeetup(props) {
  const submitHandler = (entered) => {
    console.log(entered);
  };

  return <NewMeetupForm onAddMeetup={submitHandler} />;
}

export default NewMeetup;
