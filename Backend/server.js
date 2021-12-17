require('./src/database');
const cors = require("cors");

const app = require('express')();
const port = 3031;

const UserRouter = require('./api/User');
const OrdenRouter = require('./api/Orden');
const PuertoRouter = require('./api/Puerto');

const bodyParser = require('express').json;
app.use(bodyParser());
app.use(cors()); //Middleware cors


app.use('/user', UserRouter);
app.use('/order', OrdenRouter);
app.use('/puerto', PuertoRouter)

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});