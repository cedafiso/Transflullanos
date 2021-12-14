require('./src/database');

const app = require('express')();
const port = 3000;

const UserRouter = require('./api/User');
const OrdenRouter = require('./api/Orden');

const bodyParser = require('express').json;
app.use(bodyParser());


app.use('/user', UserRouter);
app.use('/order', OrdenRouter);

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});