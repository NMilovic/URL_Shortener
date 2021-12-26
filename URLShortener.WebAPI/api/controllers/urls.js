const TinyUrl = require('../models/TinyUrl');

exports.getUrl = ("/", async (req, res) => {
    
    try{
        const navigationUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        console.log(navigationUrl);
        const url = await TinyUrl.findOne({ tinyUrl: navigationUrl });
        console.log(url);
        if(url){
            var clicks = ++url.clicks;
            console.log(clicks);
            TinyUrl.findOneAndUpdate({ _id: url._id }, { clicks: clicks }, { new: true })
                .then(response => {
                    res.status(300).redirect(response.longUrl);
                })
                .catch(err => {
                    res.status(500).json('Error occured');
                })
        }else{
            res.status(404).json('URL not found.');
        }
    }catch (err){
        res.status(500).json(err);
    }
})