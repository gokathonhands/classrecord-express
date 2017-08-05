const express = require('express');
const app = express();
const firebaseinit = require('./firebase/firebaseinit');

firebaseinit();

app.get('/', (req, res) => {
			  res.send('Hello World!')
				})

// app.use('/api',require('./routes/api'))

app.listen(3000, function () {
		  console.log('Example app listening on port 3000!')
			})
