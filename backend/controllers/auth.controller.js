import { hashPassword, comparePassword } from "../libs/bcrypt.js";
import { generateToken } from "../libs/JWT.js";
import User from "../models/users.model.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const boyPic =
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const girlPic =
      "https://images.unsplash.com/photo-1664510588112-b6aab9016be1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const newUser = await User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyPic : girlPic,
    });

    const saveUser = await newUser.save();

    if (!saveUser) {
      return res.status(400).json({ error: "Failed to create user" });
    }

    generateToken(saveUser._id, res);

    return res.status(201).json({
      message: "User created successfully",
      data: {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      },
    });
  } catch (error) {
    console.log("Error in signupUser", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ username });

    //validate password
    const isMatch = await comparePassword(password, user?.password || "");

    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateToken(user._id, res);

    return res.status(200).json({
      message: "Login successful",
      data: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        gender: user.gender,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.log("Error in loginUser", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logoutUser", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
