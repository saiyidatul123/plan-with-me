var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.send(`Welcome to API \n .../users \n .../tasks \n .../stickers`);
// });
router.get("/", (req, res) => {
  res.send("Welcome to API.../contacts .../events .../stickers");
});
module.exports = router;
