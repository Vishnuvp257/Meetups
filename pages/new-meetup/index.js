import React from "react";
import { MongoClient } from "mongodb";

import { useRouter } from "next/router";

import NewMeetupForm from "./../../components/meetups/NewMeetupForm";

function NewMeetup(props) {
  const router = useRouter();

  const addMeetupHandler = async (enteredData) => {
    const res = await fetch("/api/new-meetup/", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
