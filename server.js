const express = require('express');
const studentRouter = require('./routers/studentRouters');
require('./config/config')
const port = process.env.port
const app = express();
app.use(express.json());

app.use('./uploads', express.static('uploads'));


app.use('/api/v1', studentRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
