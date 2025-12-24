const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

router.use(protect);

router.get("/", getTransactions);
router.post("/", createTransaction);
router.put("/", updateTransaction);
router.delete("/", deleteTransaction);

module.exports = router;
