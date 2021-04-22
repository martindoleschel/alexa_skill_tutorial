const RepeatNameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RepeatNameIntent';
    },
    handle(handlerInput) {
       const nameToRepeat = Alexa.getSlotValue(handlerInput.requestEnvelope, "nameToRepeat");
        
        return handlerInput.responseBuilder
            .speak("Nice to meet you, " + nameToRepeat)
            .reprompt('What name shall I repeat?')
            .getResponse();
    }
};
