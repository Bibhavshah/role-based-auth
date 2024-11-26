const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);


router.post("/logout", authMiddleware, authController.logout);
router.get(
  "/users",
  authMiddleware,
  roleMiddleware(["Admin", "Superuser"]),
  authController.getAllUsers
);
router.delete(
  "/users/:userId",
  authMiddleware,
  roleMiddleware(["Superuser"]),
  authController.deleteUser
);

router.put(
  "/change-role",
  authMiddleware,
  roleMiddleware(["Superuser"]),
  authController.changeRole
);

router.get(
  "/admin-dashboard",
  authMiddleware,
  roleMiddleware(["Admin"]),
  (req, res) => {
    res.json({ message: "Welcome to Admin Dashboard" });
  }
);

router.get(
  "/moderator-panel",
  authMiddleware,
  roleMiddleware(["Moderator", "Admin"]),
  (req, res) => {
    res.json({ message: "Welcome to Moderator Panel" });
  }
);

router.get(
  "/user-profile",
  authMiddleware,
  roleMiddleware(["User", "Moderator", "Admin"]),
  (req, res) => {
    res.json({ message: "Welcome to User Profile" });
  }
);

module.exports = router;
