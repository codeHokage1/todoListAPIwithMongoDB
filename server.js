const express = require('express');
const app = express();
const connectWithDb = require('./src/config/database');
const router = require('./src/routers/todoRoutes');

connectWithDb('mongodb://localhost:27017');
app.use(express.json());
app.use('/', router);
app.use('/todo', router);
app.use('/todo/:id', router)

app.listen(8008, () => {
    console.log("Server is running on port 8008");
})