import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetail(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://vishnuvp:wcCnquyZLSkti2el@cluster0.ix9ndo7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
  return {
    paths: meetupIds.map((meetup) => ({
      params: { meetups: meetup._id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetups;

  const client = await MongoClient.connect(
    "mongodb+srv://vishnuvp:wcCnquyZLSkti2el@cluster0.ix9ndo7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupDetails = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: meetupDetails._id.toString(),
        title: meetupDetails.title,
        address: meetupDetails.address,
        image: meetupDetails.image,
        description: meetupDetails.description,
      },
    },
    revalidate: 1,
  };
};

export default MeetupDetail;
