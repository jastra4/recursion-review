// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // return a JSON string of the parameter
  //var result = "";
  // check data type of obj
  if (typeof obj === 'number')
    return "\"" + obj + "\"";
     else if (typeof obj === 'string')
      return "\"" + obj + "\"";
       else if (typeof obj === 'boolean')
         return "\"" + number + "\"";
        else if (obj === null)
          return "\"" + "null" + "\"";
            
        
  // make string 
//return result;
};
