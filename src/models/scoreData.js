const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreDataSchema = new Schema(
  {
    score: Number,
    date: Object,
  },
  { timestamps: true }
);

scoreDataSchema.index({ createdAt: 1 }, { expireAfterSeconds: 432000 });

const ScoreData = mongoose.model("ScoreData", scoreDataSchema);
module.exports = ScoreData;
