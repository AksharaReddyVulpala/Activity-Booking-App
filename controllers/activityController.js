import { Activity } from "../models/activityModel.js";

export const getActivities = async (req, res) => {
  try {
    const currentDate = new Date();
    const activities = await Activity.find({
      dateTime: { $gte: currentDate },
    }).sort({ dateTime: 1 });

    if (!activities?.length) {
      return res.status(404).json({
        success: false,
        message: "No upcoming activities found",
      });
    }

    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const addActivity = async (req, res) => {
  try {
    const { title, description, location, dateTime, capacity } = req.body;

    if (new Date(dateTime) <= new Date()) {
      return res.status(400).json({
        success: false,
        message: "Activity date must be in the future",
      });
    }

    const activity = await Activity.create({
      title,
      description,
      location,
      dateTime,
      capacity: capacity || 20,
    });

    res.status(201).json({
      success: true,
      message: "Activity created successfully",
      data: activity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create activity",
      error: error.message.includes("validation failed")
        ? error.message.split(": ")[2]
        : error.message,
    });
  }
};
