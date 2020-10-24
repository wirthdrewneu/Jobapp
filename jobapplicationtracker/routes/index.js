var express = require("express");
var router = express.Router();

const myDB = require("../db/jobmongodb.js");

/* GET home page. */
router.get("/calendar", async (req, res, next) => {
	const caldata = await myDB.getCaldata();
	res.json(caldata);
});
/*router.get("/appform", function (req, res, next) {
	res.json(caldata);
});*/

module.exports = router;
