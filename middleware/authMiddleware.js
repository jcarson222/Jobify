import { UnauthenticatedError } from "../errors/customErrors.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  // ^^^ access to cookie from cookieParser in server.js

  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }
  // console.log(req.cookies);

  next();
};
