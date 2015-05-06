Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message, seen:false});
}; 

clearError = function(message) {
  Errors.remove({seen: true});
}
