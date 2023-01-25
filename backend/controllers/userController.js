const { User, School } = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  // register
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hashed,
      });
      const savedUser = await newUser.save();
      if (req.body.school) {
        const school = await School.findById(req.body.school);
        await school.updateOne({ $push: { users: savedUser._id } });
      }
      return res.status(200).json(savedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // generate token
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        user: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "20s",
      }
    );
  },
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        user: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: "365d",
      }
    );
  },
  // login
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(404).json("wrong username");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("wrong password");
      }
      if (user && validPassword) {
        const accessToken = userController.generateAccessToken(user);
        const refreshToken = userController.generateRefreshToken(user);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...others } = user._doc;
        return res.status(200).json({ ...others, accessToken });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  requestRefreshToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("You're not authenciated");
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
      if (err) {
        console.log(err);
      }
      const newAccessToken = userController.generateAccessToken(user);
      const newRefreshToken = userController.generateRefreshToken(user);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      return res.status(200).json({ accessToken: newAccessToken });
    });
  },
  // get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = userController;
