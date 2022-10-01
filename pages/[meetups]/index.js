import React from "react";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail(props) {
  return (
    <MeetupDetails
      image="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      title="First meetup"
      address="some address"
      description="It was a fine day"
    />
  );
}

export default MeetupDetail;
