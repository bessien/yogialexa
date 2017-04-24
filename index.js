// This will import alexa-sdk and set up an Alexa object for us to work with.
var Alexa = require('alexa-sdk')

// Handles the intents for our skill.
var handlers = {

    'SetSequence': function () {
        const intent = this.event.request.intent

        const sequence = intent.slots.sequence.value

        this.emit(':tell', `walking you through ${sequence}`);
    },

};

// We need to register the event handlers using the registerHandlers function of the alexa object we just created.
// Use the execute function from the alexa object to run your skill's logic.
exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

