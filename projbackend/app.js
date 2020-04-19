require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const bodyparser= require('body-parser')
const cookieparser= require('cookie-parser')
const cors= require('cors')

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");


const app = express();

//DB Connection
mongoose
    .connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB connected")
}).catch(
    console.log("DB Connection Failed"));
   
    
//Middalewares
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

//Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", orderRoutes);

//PORT
const port = process.env.PORT || 3001;


//Starting the server   
app.listen(port, ()=>{
    console.log(`app is listening at ${port}`);
})      