const mongoose = require("mongoose");
const schema = mongoose.Schema;

const QuizzSchema = new schema({
  name: {
    type: String,
  },
  img: { type: String },
  subject: {
    type: String,
  },
  overview: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  questions: [
    {
      question: { type: String },

      option1: {
        type: String,
        isCorrect: false,
      },
      option2: {
        type: String,
        isCorrect: false,
      },
      option3: {
        type: String,
        isCorrect: false,
      },
      option4: {
        type: String,
        isCorrect: false,
      },
      correctAnswer: {
        type: String,
      },
    },
  ],
});
module.exports = mongoose.model("quizz", QuizzSchema);
