import { Booking } from "../models/bookingModel.js";
import { Activity } from "../models/activityModel.js";

export const bookActivity = async (req, res) => {
  try {
    const { activityId } = req.params;
    console.log("req.user._id", req.user);
    const userId = req.user;

    const activity = await Activity.findOne({
      _id: activityId,
      dateTime: { $gte: new Date() },
    });

    console.log("activity", activity);

    if (!activity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found or has already occurred",
      });
    }

    const existingBooking = await Booking.findOne({
      user: userId,
      activity: activityId,
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this activity",
      });
    }

    const booking = await Booking.create({
      user: userId,
      activity: activityId,
      status: "confirmed",
      bookedAt: new Date(),
    });

    await booking.populate("activity");

    res.status(201).json({
      success: true,
      message: "Activity booked successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Booking failed",
      error: error.message,
    });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const userId = req.user;

    const bookings = await Booking.find({ user: userId })
      .populate({
        path: "activity",
        select: "title description location dateTime",
      })
      .sort({ bookedAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve bookings",
      error: error.message,
    });
  }
};
