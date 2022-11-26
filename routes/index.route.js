const express = require('express');
const router = express.Router();
const userRoutes = require("./user.route");

//router.use("/auth", authRoutes);
//router.use(authMiddleware.verifyToken);
router.get("/", (req, res) => {
  res.send("Welcome to my store server");
});
router.use("/user", userRoutes);
//router.use("/add", userRoutes);


module.exports = router;
