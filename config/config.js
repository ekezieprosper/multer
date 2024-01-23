const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.dblink

mongoose.connect(DB).then(() => {
    console.log('Database connection successful')
}).catch((e) => {
    console.log(e.message)
})
