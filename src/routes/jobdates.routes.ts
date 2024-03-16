import express from "express";
import { jobdateController } from "../controllers/jobdateController";
import { de } from "@faker-js/faker";
import { authMiddleware } from "../middlewares/authMiddleware";
import { authorizeMiddleware } from "../middlewares/authorize";
const router = express.Router();

/////////      JOBDATES ROUTES      //////////////////

//create jobdate
router.post(
  "/create",
  authMiddleware,
  authorizeMiddleware(["Artist"]),
  jobdateController.create
);

//edit jobdate
router.put(
  "/:id",
  authMiddleware,
  authorizeMiddleware(["Artist"]),
  jobdateController.update
);

//delete date
router.delete(
  "/:id",
  authMiddleware,
  authorizeMiddleware(["Client", "Artist"]),
  jobdateController.delete
);

//get jobdates by client
router.get(
  "/client/jobdates",
  authMiddleware,
  authorizeMiddleware(["Client"]),
  jobdateController.getByLogedClient
);

//get jobdates by artist
router.get(
  "/artist/jobdates",
  authMiddleware,
  authorizeMiddleware(["Artist"]),
  jobdateController.getByLogedArtist
);

//////////////////// PROTECTED ROUTES //////////////////////

//get all jobdates
router.get(
  "/",
  authMiddleware,
  authorizeMiddleware(["Admin"]),
  jobdateController.getAll
);

//get jobdatebyid
router.get(
  "/:id",
  authMiddleware,
  authorizeMiddleware(["Admin"]),
  jobdateController.getById
);

export default router;
