const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send(`server is running ${process.env.PORT} port`);
});
module.exports = router;
