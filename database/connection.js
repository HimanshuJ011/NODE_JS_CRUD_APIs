const mongoose = require('mongoose');

exports.connectDB = async () => {

    try{
        mongoose.connect( process.env.DB,
            {
                useNewUrlParser : true, 
                useUnifiedTopology:true, // useCreateIndex: true,
            })
            console.log('connected to Database');
    }
    catch(err)
    {
        console.log(err);
    }
}

