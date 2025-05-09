import express from "express";
import {
  getActivities,
  addActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.route("/").get(getActivities).post(addActivity);

export default router;
