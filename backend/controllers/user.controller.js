import User from "../models/users.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggInUserId = req.userId;

    const filteredUsers = await User.find({
      _id: { $ne: loggInUserId },
    }).select("-password");

    return res.status(200).json({
      message: "Users fetched successfully",
      data: filteredUsers,
    });
  } catch (error) {
    console.log("Error getting users for sidebar", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
