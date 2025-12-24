const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getTransactions,
  createTransaction,
} = require("../controllers/transactionController");

router.use(protect);

router.get("/", getTransactions);
router.post("/", createTransaction);

module.exports = router;
