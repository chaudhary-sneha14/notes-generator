//auth controller

import User from "../models/User.js";
import { getToken } from "../utils/token.js";

export const googleAuth = async (req, res) => {
  try {
    const { email, name } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
      });
      await user.save();
    }

    const token = getToken(user?._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.json({ token });
  } catch (error) {
    console.error("Error during Google authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


//--------------logout-----------------
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,   // localhost pe false
    sameSite: "None"
  });

  return res.status(200).json({
    message: "Logged out successfully"
  });
};