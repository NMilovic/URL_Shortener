require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Routes
const urlRoutes = require('./api/routes/url.routes');
const tinyUrlRoutes = require('./api/routes/tinyUrl.routes');

//JSON
app.use(express.json({ extended: false }));

//Connect database
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@tinyurlcluster0.k2ws7.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,{
    // useNewUrlParser: true, 
    // useUnifiedTopology: true
}, () => {console.log('DB connected')});

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', '*');
        return res.status(200).json();
    };
    next();
});

//Routes
app.use('/', urlRoutes);
app.use('/api/tinyUrls', tinyUrlRoutes);

//Error handling--------------------
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
//----------------------------------

module.exports = app;