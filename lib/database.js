var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/imageSearch');

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
