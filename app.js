const express = require('express');
const app = express();
const firebaseinit = require('./firebase/init/firebaseinit');
const fbdbhelper = require('./firebase/database/fbdbhelper');

firebaseinit();

app.get('/', (req, res) => {
	fbdbhelper("123", "key",]"title");

    res.send('Hello World!')
})

// app.use('/api',require('./routes/api'))

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
