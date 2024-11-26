const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.createSuperuser = async () => {
  const existingSuperuser = await User.findOne({ role: "Superuser" });
  if (!existingSuperuser) {
    const hashedPassword = await bcrypt.hash("supersecurepassword", 10); 
    const superuser = new User({
      username: process.env.SUPERUSER_USERNAME,
      email: process.env.SUPERUSER_EMAIL,
      password: hashedPassword,
      role: "Superuser",
    });
    await superuser.save();
    console.log("Superuser created successfully");
  } else {
    console.log("Superuser already exists");
  }
};
