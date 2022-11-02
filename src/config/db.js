const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://abcd:abcd@cluster0.ymxkpcw.mongodb.net/?retryWrites=true&w=majority");
};
module.exports = connect;
