const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getMonthlySummary,
  getYearlySummary,
} = require("../controllers/summaryController");

router.use(protect);

router.get("/monthly", getMonthlySummary);
router.get("/yearly", getYearlySummary);

module.exports = router;
