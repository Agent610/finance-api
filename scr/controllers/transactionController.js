const Transaction = require("../models/transaction");

const getTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.find({ userId: req.user._id }).sort({
      date: -1,
    });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createTransaction = async (req, res) => {
  const { type, category, amount, date, note } = req.body;

  if (!type || !category || !amount) {
    return res
      .status(400)
      .json({ message: "Type, category, and amount are required" });
  }
  try {
    const transaction = await Transaction.create({
      userId: req.user._id,
      type,
      category,
      amount,
      date: date || Date.now(),
      note,
    });
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getTransactions, createTransaction };
