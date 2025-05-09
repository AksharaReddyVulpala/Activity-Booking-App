import { Activity } from "../models/activityModel.js";

const sampleActivities = [
  {
    title: "Cricket Match",
    description: "Weekend tournament with trophies",
    location: "Central Sports Ground",
    dateTime: new Date(Date.now() + 86400000),
    capacity: 22,
  },
  {
    title: "Movie Night - Inception",
    description: "Outdoor screening with popcorn",
    location: "Rooftop Terrace",
    dateTime: new Date(Date.now() + 172800000),
    capacity: 40,
  },
];

const addActivities = async () => {
  if (process.env.NODE_ENV === "development") {
    await Activity.deleteMany();
    await Activity.insertMany(sampleActivities);
    console.log("Sample activities inserted");
  }
};

export default addActivities;
