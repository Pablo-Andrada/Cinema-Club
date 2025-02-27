require('dotenv').config();
const mongoose = require('mongoose');


const dbCon = async () => {
    //Realiza la conexion con la base de datos
    await mongoose.connect(process.env.MONGO_URI)
    //console.log(process.env.MONGO_URI);
    
}

module.exports = dbCon;