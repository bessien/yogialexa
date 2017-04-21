// This will import alexa-sdk and set up an Alexa object for us to work with.
var Alexa = require('alexa-sdk');

// exports.handler = function(event, context, callback){
//     var alexa = Alexa.handler(event, context);
// };

// Handles the intents for our skill.
var handlers = {

// The handlers you define can call each other, making it possible to ensure your responses are uniform
	'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }

};

// To ask the user for information we would instead use an :ask action. 
//The difference between :ask and :tell is that after a :tell action, 
//the session is ended without waiting for the user to provide more input.

// this.emit(':ask', 'What would you like to do?', 'Please say that again?');

// var speechOutput = 'Hello world!';
// var repromptSpeech = 'Hello again!';

// this.emit(':tell', speechOutput);

// this.emit(':ask', speechOutput, repromptSpeech);

// We need to register the event handlers using the registerHandlers function of the alexa object we just created.
 // exports.handler = function(event, context, callback) {
 //      var alexa = Alexa.handler(event, context);
 //      alexa.registerHandlers(handlers); //You can also register multiple handler objects at once alexa.registerHandlers(handlers, handlers2, handlers3, ...);
 // };

// use the execute function from the alexa object to run your skill's logic.
  exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

