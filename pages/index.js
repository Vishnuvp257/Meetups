import React from "react";
import { MongoClient } from "mongodb";

import MeetupList from "./../components/meetups/MeetupList";

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
