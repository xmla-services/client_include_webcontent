let express = require('express');
let app = express();
let server = require('http').createServer(app);
let port = 3001;
let config = require('./config.json');
app.use(express.static('public'));
server.listen(port, function () {
    console.log('Webserver läuft und hört auf Port %d', port);
});
app.get('/danske_info_on', (req, res) => {
    if(config.DAANSE_INFO_ON){
        res.send('ok')
    }else{
        res.status(404).send('Not found');
    }
})
app.get('/sensinact_info_on', (req, res) => {
    if(config.SENSINACT_INFO_ON){
        res.send('ok')
    }else{
        res.status(404).send('Not found');
    }
})

