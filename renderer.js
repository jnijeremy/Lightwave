// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var request = require('request');
	options = {
		url: 'https://lightwave.atlassian.net/rest/api/2/search?jql=assignee=test',
		headers: {
    	'Authorization': 'Basic amVubnkuc29uZzAxOlRlc3QxMjM='
  	}	
	}
	request(options, function (error, response, body) {
	 if (!error && response.statusCode == 200) {
	   console.log(body) // Show the HTML for the Google homepage.
	 }
})