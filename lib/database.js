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

function latestSearch(callback) {
    HistoryItem.find([]).sort('-date').exec(
        function(err, items){
            if(err) return console.error(err);
            if (items.length > 10)
                callback(items.slice(0, 10));
            else
                callback(items);
        }
    );
}

var database = function() {
    this.saveHistory = saveHistory;
    this.latestSearch = latestSearch;
}

module.exports = new database;
