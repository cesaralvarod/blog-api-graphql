const { Schema, model } = require("mongoose");
const hashPassword = require("../../utils/mongoosePlugins/hashPassword");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      hide: true,
      select: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Provide a valid email address",
      ],
      min: 6,
    },
    displayName: {
      type: String,
      required: true,
      min: 3,
    },
  },
  { timestamps: true, versionKey: false }
);

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

userSchema.plugin(hashPassword);

module.exports = model("User", userSchema);
