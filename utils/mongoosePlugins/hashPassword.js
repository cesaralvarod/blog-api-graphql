const bcrypt = require("bcryptjs");

const hashPassword = (
  schema,
  {
    bcryptRounds = 10,
    passwordField = "password",
    methodName = "comparePassword",
    minChars = 8,
  } = {}
) => {
  schema.add({
    [`${passwordField}`]: { type: String, required: true, min: minChars },
  });

  schema.pre("save", function (next) {
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified(passwordField)) return next();

    // Generate a salt
    bcrypt.genSalt(bcryptRounds, (err, salt) => {
      if (err) return next(err);

      // Hash the password using our new salt
      bcrypt.hash(user[passwordField], salt, (err, hash) => {
        if (err) return next(err);

        user[passwordField] = hash;

        next();
      });
    });
  });

  schema.methods[methodName] = async (candidate, password) => {
    return bcrypt.compare(candidate, password);
  };
};

module.exports = hashPassword;
