const express = require('express');
const app = express();
const mongo = require('./database/connection'); //DATABASE CONNECTION
const dotenv = require('dotenv'); 
const routes = require('./routes/index.route')
dotenv.config();

//-------- PUT ALL APIs IN ROUTE and Logics in Controllers-------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes);
const main = async ()=> {
    const connect  =  await mongo.connectDB();
    
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT || 3000}`);
        
    });
};
main();




// mongodb+srv://Joshiman7:$Joshimongo7.@himanj.sy5gzdw.mongodb.net/?retryWrites=true&w=majority

// mongodb+srv://Joshiman7:$Joshimongo7.@himanj.sy5gzdw.mongodb.net/my-store