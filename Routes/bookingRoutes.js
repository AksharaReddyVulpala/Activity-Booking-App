import express from "express";
import { validateToken } from "../middlewares/validateTokenHandler.js";
import {
  bookActivity,
  getMyBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.use(validateToken);

router.post("/:activityId", bookActivity);
router.get("/my-bookings", getMyBookings);

export default router;
