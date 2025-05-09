import express from "express";
import {
  getActivities,
  addActivity,
  addMultipleActivities,
} from "../controllers/activityController.js";

const router = express.Router();

router.route("/").get(getActivities).post(addMultipleActivities);

export default router;
