var express = require('express')
var app = express();
app.use(express.static('public'));


app.listen(8000, function() {
    console.log('Connected 8000 port');
});;
