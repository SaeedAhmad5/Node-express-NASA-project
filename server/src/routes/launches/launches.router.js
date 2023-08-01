const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLaunche,
  httpAbortLaunch,
} = require("./launches.controller");

const launcesRouter = express.Router();

launcesRouter.get("/", httpGetAllLaunches);
launcesRouter.post("/", httpAddNewLaunche);
launcesRouter.delete("/:id", httpAbortLaunch);

module.exports = launcesRouter;
