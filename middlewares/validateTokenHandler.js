import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("Not authorized - No Bearer token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("decoded", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401);
    throw new Error(`Not authorized - ${err.message}`);
  }
});
