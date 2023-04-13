const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect('mongodb://127.0.0.1:27017/penultimo', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MONGO CONECTADO");
  }).catch((err) => {
    return console.log(`ERRO NA CONEXÃO: ${err}`);
  })
}

module.exports = connectToDatabase;
