require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Visitor = require("./models/Visitors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

connectDB();
app.get("/reset", async (req, res) => {
  try {
    await Visitor.findOneAndUpdate(
      {},
      { count: 0 },
      { upsert: true }
    );

    res.json({ message: "Count reset to 0" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/count", async (req, res) => {
  try {
    const data = await Visitor.findOne();
    res.json({ count: data?.count || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/visit", async (req, res) => {
  try {
    let data = await Visitor.findOne();

    if (!data) {
      data = await Visitor.create({ count: 1 });
    } else {
      data.count += 1;
      await data.save();
    }

    res.json({ count: data.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});