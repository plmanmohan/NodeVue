const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db.js');
const userRouter =require('./routes/userRoutes.js');
const productRouter = require('./routes/productRouter');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/app/user', userRouter);
app.use('/app/products', productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server is running ${PORT}`);
    sequelize.sync();
});