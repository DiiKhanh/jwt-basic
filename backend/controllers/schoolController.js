const { User, School } = require("../models/model");

const schoolController = {
  // add school
  addSchool: async (req, res) => {
    try {
      const newSchool = new School(req.body);
      const savedSchool = await newSchool.save();
      return res.status(200).json(savedSchool);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // get all school
  getAllSchool: async (req, res) => {
    try {
      const allSchools = await School.find();
      return res.status(200).json(allSchools);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // get a school
  getSchool: async (req, res) => {
    try {
      const school = await School.findById(req.params.id).populate("users", [
        "username",
        "isAdmin",
      ]);
      return res.status(200).json(school);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // update school
  updateSchool: async (req, res) => {
    try {
      const school = await School.findById(req.params.id);
      await school.updateOne({ $set: req.body });
      return res.status(200).json("updated successfully!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // delete school
  deleteSchool: async (req, res) => {
    try {
      await User.updateMany({ school: req.params.id }, { school: null });
      await School.findByIdAndDelete(req.params.id);
      return res.status(200).json("deleted successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = schoolController;
