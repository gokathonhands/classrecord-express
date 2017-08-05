const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.get('/', (req, res) => {
			  res.send('Hello World!')
				})

//app.use('/api',require('./routes/api'))
app.post('/upload',function(req,res){
		fs.readFile(req.files.uploadFile.path,function(error,data){
				var filePath=__dirname+"\\files\\"+req.files.upladFile.name
				fs.writeFile(filePath,data,function(error){
						if(error){
							throw err;
						}
						else {
							res.redirect("back");
						}
						})
				})
	})
app.listen(3000, function () {
		  console.log('Example app listening on port 3000!')
			})
