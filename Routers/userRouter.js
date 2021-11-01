const router = require("express").Router();
const { signUp, verifyOtp } = require("../Controller/userController");
router.route("/signup").post(signUp);
router.route("/signup/verifyotp").post(verifyOtp);

module.exports = router;
