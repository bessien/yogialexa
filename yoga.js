// This will import alexa-sdk and set up an Alexa object for us to work with.
var Alexa = require('alexa-sdk');

// Handles the intents for our skill.
var handlers = {

    'WhichFlowIntent': function () {
        this.emit(':ask', 'Which yoga flow would you like me to guide you through; Sun Salutations A, B, or both?');
    }

    'CuesIntent': function () {
        this.emit(':ask', 'Would you like me to cue you through the first of three flows?');
    }

    'SunAIntent': function () {
        this.emit(':tell', 'Sun A.');
    }

    'SunBIntent': function () {
        this.emit(':tell', 'Sun B.');
    }

    'SunABIntent': function () {
        this.emit(':tell', 'Sun A and B.');
    }    

    'SunACuesIntent': function () {
        this.emit(':tell', 'Sun A with cues.');
    }

    'SunBCuesIntent': function () {
        this.emit(':tell', 'Sun B with cues.');
    }

    'SunABCuesIntent': function () {
        this.emit(':tell', 'Sun A and B with cues');
    }

};

// We need to register the event handlers using the registerHandlers function of the alexa object we just created.
// Use the execute function from the alexa object to run your skill's logic.
  exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

