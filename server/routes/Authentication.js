const express = require("express");
const router = express.Router();

const {
  LoginUser,
  LoginUserEmail,
  RegisterUser,
  LogoutUser,
  RefreshToken,
  ForgotPassword,
  ResetPassword,
} = require("../controllers/Authentication");
const LoginLimiter = require("../middleware/LoginLimiter");

router.post("/login", LoginLimiter, LoginUser);
router.post("/login/email", LoginLimiter, LoginUserEmail);
router.post("/register", RegisterUser);
router.get("/logout", LogoutUser);
router.get("/refresh-token", RefreshToken);
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password", ResetPassword);
router.get("/wake", (req, res) => {
  console.log("Wake");
  res.status(200);
  res.json({ status: "Running" });
});

module.exports = router;
