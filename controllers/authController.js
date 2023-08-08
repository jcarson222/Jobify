import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";

export const login = (req, res) => {
  res.send("login");
};

export const register = async (req, res) => {
  // first user = admin
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const user = await User.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: `Welcome ${user.name}!`, user: user });
};
