const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmim: {
    type: Boolean,
    defaut: false,
  },
  quizs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "quiz",
    },
  ],
});
module.exports = mongoose.model("user", UserSchema);
