var express = require('express')
var request = require('request')

var app = express()

// set static assets path
app.use(express.static('./public'))

app.use(function (req, res, next) {
	console.log('Routing...', req.url)
	next()
})

// routes
app.get('/', function (req, res) {
	res.send('index.html')
})

app.get('/search/:stateID/:ntee/:city', function (req, res) {
	var stateID = req.params.stateID
	var ntee = req.params.ntee
	var city = req.params.city

	var propublicaURL = 'https://projects.propublica.org/nonprofits/api/v1/search.json?state[id]='+stateID+'&ntee[id]='+ntee+'&c_code[id]=3&q='+city+'&order=fiscalyr&sort_order=desc';

	console.log(propublicaURL)

	request(propublicaURL, function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body)
    		res.setHeader('Content-Type', 'application/json')
    		res.send(body)
  		}
	})
})

app.listen(1337, function () {
	console.log('serving on 1337')
})
