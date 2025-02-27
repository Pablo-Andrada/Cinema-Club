const mongoose = require('mongoose');

const dbCon = async () => {
    //Realiza la conexion con la base de datos
    await mongoose.connect("mongodb+srv://pablomatiasandrada:D8FXWky6463ggsZi@prueba.oripz.mongodb.net/movies?retryWrites=true&w=majority")
}

module.exports = dbCon;