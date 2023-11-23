const mongoose = require("mongoose");

const Conectar = () => {
  return mongoose.connect(
    "mongodb+srv://admin:admin@diegesis-documents.pbkiqks.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = Conectar();
