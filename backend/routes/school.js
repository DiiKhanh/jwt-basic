const schoolController = require("../controllers/schoolController");

const Router = require("express").Router();

// add a school
Router.post("/", schoolController.addSchool);
// get all school
Router.get("/", schoolController.getAllSchool);
// get school
Router.get("/:id", schoolController.getSchool);
// update
Router.put("/:id", schoolController.updateSchool);
// delete
Router.delete("/:id", schoolController.deleteSchool);
module.exports = Router;
