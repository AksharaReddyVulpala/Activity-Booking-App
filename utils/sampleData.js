import { Activity } from "../models/activityModel.js";

const sampleActivities = [
  {
    title: "IPL Watch Party - RCB vs MI",
    description: "Big screen viewing with snacks and fan competitions",
    location: "Sports Bar Downtown",
    dateTime: new Date(Date.now() + 86400000)
    
  },
  {
    title: "Premier League Football Screening",
    description: "Manchester United vs Arsenal with commentary",
    location: "The Football Pub",
    dateTime: new Date(Date.now() + 172800000)
  },
  {
    title: "Avengers Movie Marathon",
    description: "All 4 Avengers movies back-to-back",
    location: "Cineworld Multiplex",
    dateTime: new Date(Date.now() + 259200000)
  },
  {
    title: "Standup Comedy Special",
    description: "Featuring Zakir Khan and other comedians",
    location: "Comedy Club Central",
    dateTime: new Date(Date.now() + 345600000)
  },
  {
    title: "IPL Finals Viewing Party",
    description: "Live screening with cheerleaders and prizes",
    location: "Stadium Lounge",
    dateTime: new Date(Date.now() + 432000000)
  },
  {
    title: "Champions League Football Night",
    description: "Real Madrid vs Bayern Munich screening",
    location: "European Sports Cafe",
    dateTime: new Date(Date.now() + 518400000)
  },
  {
    title: "Oscar Winners Movie Night",
    description: "Screening of The Godfather with discussion",
    location: "Classic Film Theater",
    dateTime: new Date(Date.now() + 604800000)
  },
  {
    title: "Comedy Roast Battle",
    description: "Local comedians competing in roast format",
    location: "Laugh Factory",
    dateTime: new Date(Date.now() + 691200000)
  }
];

const addActivities = async () => {
  if (process.env.NODE_ENV === "development") {
    await Activity.deleteMany();
    await Activity.insertMany(sampleActivities);
    console.log("Sample activities inserted");
  }
};

export default addActivities;
