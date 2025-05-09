import express from "express";
import { validateToken } from "../middlewares/validateTokenHandler.js";
import {
  bookActivity,
  getMyBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.use(validateToken);


router.get("/my-bookings", getMyBookings);
router.post("/:activityId", bookActivity);

export default router;
