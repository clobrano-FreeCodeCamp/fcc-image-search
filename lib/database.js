var mongoose = require('mongoose');

if (process.env.DEBUGMONGO) {
    var mongouri = 'mongodb://0.0.0.0:27017/imageSearch'
} else {
    var user = process.env.MONGO_USER;
    var pass = process.env.MONGO_PASSWORD;
    var mongouri = 'mongodb://' + user + ':' + pass + '@ds011873.mlab.com:11873/image_search_fcc';
}

mongoose.connect(mongouri);

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
});

var HistoryItem = mongoose.model('HistoryItem',
                                 {
                                     query: String,
                                     date: String,
                                 });

function saveHistory(query) {
    var item = HistoryItem({
        "query": query,
        "date" : new Date().toLocaleString()
    });
    item.save(function(err) {
        if(err)
            console.log(err);
    });
}

module.exports = saveHistory;
