//Require dotenv
require("dotenv").config();

//Variable for user input
var command = process.argv[2];

//Variables for respective npm modules
var spotify = require('spotify');
var omdb = require('omdb');
var fs = require("fs");
var Twitter = require('twitter');

//Variables for album and movie info to be displayed as object
var albumObj = {};
var movieObj = {};

//Store Twitter access keys in a variable.
var myKeys = require('./keys');
var myTokens = myKeys.twitterKeys;
var myConsKey = myTokens.consumer_key;
var myConsSec = myTokens.consumer_secret;
var myAccToKey = myTokens.access_token_key;
var myAccToSec = myTokens.access_token_secret;
 
var client = new Twitter({
  consumer_key: myConsKey,
  consumer_secret: myConsSec,
  access_token_key: myAccToKey,
  access_token_secret: myAccToSec
});

//Store Twitter parameters in variable
var params = {screen_name: 'Reece78708860', count: 20};


//Function that takes in the following commands: my-tweets; will add the other commands later..
function liriBot() {
if (command === "my-tweets") {
	logCommand(command);
	myTweets();
} else if (command === "do-what-it-says") {
	logCommand(command);
	doWhatItSays();
}}

function myTweets(){
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	console.log("Tweets will be loaded here");
	    for (var i = 0; i < tweets.length; i++) {
	    console.log("=========================");
	    console.log("Date " + tweets[i].created_at);
	    console.log(tweets[i].text);
		}
	  }
	});	
}

