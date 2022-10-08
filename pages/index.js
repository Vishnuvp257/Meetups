import React from "react";
import { MongoClient } from "mongodb";

import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "MY First Meetup",
    image:
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    address: "some address",
    description: "this is a fine day",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    address: "some address",
    description: "this is a great day",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://vishnuvp:wcCnquyZLSkti2el@cluster0.ix9ndo7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const data = (await meetupsCollection.find().toArray()).map((obj) => ({
    id: obj._id.toString(),
    title: obj.title,
    address: obj.address,
    image: obj.image,
  }));

  client.close();

  return {
    props: {
      meetups: data,
    },
    revalidate: 1,
  };
};

//export const getServerSideProps = async () => {};

export default HomePage;
