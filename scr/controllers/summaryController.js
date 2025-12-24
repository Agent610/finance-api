const Transaction = require("../models/transaction");

const getMonthlySummary = async (req, res) => {
  try {
    const userId = req.user._id;
    const month = parseInt(req.query.month) || new Date().getMonth() + 1;
    const year = parseInt(req.query.year) || new Date().getFullYear();

    const transactions = await Transaction.aggregate([
      {
        $match: {
          userId: userId,
          date: {
            $gte: new Date(`${year}-${month}-01`),
            $lt: new Date(`${year}-${month + 1}-01`),
          },
        },
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);

    let income = 0;
    let expense = 0;
    transactions.forEach((t) => {
      if (t._id === "income") income = t.total;
      if (t._id === "expense") expense = t.total;
    });

    res.json({
      income,
      expense,
      balance: income - expense,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getYearlySummary = async (req, res) => {
    try {
        const userId = req.user._id;
        const year = parseInt(req.query.year) || new Date().getFullYear();

        const transactions = await Transaction.aggregate([
            {
                $match: {
                    userId: userId,
                    date: {
                        $gte: new Date(`${year}-01-01`),
                        $lt: new Date(`${year + 1}-01-01`),
                    },
                },
            },
            {
                $project: {
                    type: 1,
                    amount: 1, 
                    month: {$month: "$date"},
                },
            },
            {
                $group : {
                    _id: {month: "$month", type: "$type"},
                    total: {$sum: "$amount"},
                },
            },
        ]);

        //const summary
    }
}