const validUrl = require('valid-url');
const md5 = require('md5');
const mongoose = require('mongoose');

//baseUrl
const baseUrl = process.env.BASE_URL;

//TinyUrl
const TinyUrl = require('../models/TinyUrl');

exports.shorten = async (req, res) => {
    const { longUrl } = req.body;

    //Check if base url is valid
    if(!validUrl.isUri(baseUrl)) {
        return res.status(500).json('Error occured'); //In this case it's not important to end user what happened
    };

    //Check if long url is valid
    if(validUrl.isUri(longUrl)){
        //Find if there is allready longUrl we are trying to pass 
        try{
            let url = await TinyUrl.findOne({ longUrl });

            //If long url exists just send back existing shortUrl
            if(url){
                res.status(200).json(url);
            }else{
                //TODO insert short url for new long url in table
                const shortenUrl = md5(longUrl);
                const tinyUrl = shortenUrl.substring(0,7);

                const newTinyUrl = new TinyUrl({
                    _id: new mongoose.Types.ObjectId,
                    longUrl: longUrl,
                    tinyUrl: baseUrl + '/' + tinyUrl
                });

                newTinyUrl.save()
                    .then(response => {
                        res.status(200).json(response);
                    })
                    .catch(err => {
                        //TODO handle errors
                        if(err && err.code === 11000){
                            //handle shortCode duplicate
                            // res.status(500).json('Already exists')
                            _recreateNewTinyUrl(newTinyUrl, shortenUrl, res);
                        };
                    });
            }
        }catch (err){
            res.status(500).json(err);
        }
    }else{
        //Inform the user if url is invalid
        return res.status(400).json('Inserted url is not valid');
    }
};

function _recreateNewTinyUrl(tinyUrl, shortenUrl, res){
    const newTinyUrl = new TinyUrl({
        _id: new mongoose.Types.ObjectId,
        longUrl: tinyUrl.longUrl,
        tinyUrl: baseUrl + '/' + shortenUrl
    });

    newTinyUrl.save()
        .then(response => {
            console.log(4);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            _recreateNewTinyUrl(newTinyUrl, shortenUrl, res);
        })
}