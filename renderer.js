// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var request = require('request');

options = {
	url: 'https://lightwave.atlassian.net/rest/api/2/search?jql=project%20%3D%20LIG%20AND%20fixVersion%20%3D%20"Version%202.0"',
	headers: {
	'Authorization': 'Basic amVubnkuc29uZzAxOlRlc3QxMjM='
	}	
}

request(options, function (error, response, body) {
 if (!error && response.statusCode == 200) {
   console.log(JSON.parse(body).total) // Show the HTML for the Google homepage.
 }
})