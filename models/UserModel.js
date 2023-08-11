import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

// creating a method on the user instance named 'toJSON' so when we use the 'get current user' route, we are sent a user object w/o the password parameter. Invoke this in the user controller.
UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  // ^ creates a user object

  delete obj.password;
  // ^ deletes the password param

  return obj;
};

export default mongoose.model("User", UserSchema);
