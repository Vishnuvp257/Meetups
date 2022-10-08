import React from "react";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail() {
  return (
    <MeetupDetails
      image="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      title="First meetup"
      address="some address"
      description="It was a fine day"
    />
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetups: "m1",
        },
      },
      {
        params: {
          meetups: "m2",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const meetups = context.params.meetups;

  return {
    props: {
      meetupData: {
        id: meetups,
        image:
          "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "First meetup",
        address: "some address",
        descriptionL: "It was a fine day",
      },
    },
  };
};

export default MeetupDetail;
